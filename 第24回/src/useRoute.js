import { useEffect, useState } from "react";
import { parseRoute } from "./routes.js";

export function useRoute() {
  const [hash, setHash] = useState(() => location.hash);
  useEffect(() => {
    function syncHash() {
      setHash(location.hash);
    }
    window.addEventListener("hashchange", syncHash);
    syncHash();
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);
  return parseRoute(hash);
}
