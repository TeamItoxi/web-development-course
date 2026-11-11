import { useEffect, useState } from "react";

// キーが変わったら取り直し、不要になった通信は中止する。
export function useResource(load, key) {
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (key === null) return;
    const controller = new AbortController();
    load(key, controller.signal)
      .then((data) => {
        if (controller.signal.aborted) return;
        const status = data.items?.length === 0 ? "empty" : "success";
        setResult({ key, attempt, status, data });
      })
      .catch((error) => {
        if (controller.signal.aborted) return;
        const status = error.status === 404 ? "empty" : "error";
        setResult({ key, attempt, status, data: null });
      });
    return () => controller.abort();
  }, [load, key, attempt]);

  const current = result?.key === key && result.attempt === attempt;
  const status = key === null ? "idle" : current ? result.status : "loading";
  return {
    status,
    data: current ? result.data : null,
    retry: () => setAttempt((value) => value + 1),
  };
}
