import { useState } from "react";
import { requestJson } from "./api.js";

// DummyJSONには、個人情報を含まない固定の教材用データだけを送る。
const root = "https://dummyjson.com/todos";
const sample = { todo: "Review one field guide entry", completed: false, userId: 1 };

const requests = [
  { label: "一覧を取得", method: "GET", path: "?limit=2" },
  { label: "見本を作成", method: "POST", path: "/add", body: sample },
  { label: "見本を更新", method: "PATCH", path: "/1", body: { completed: true } },
  { label: "見本を削除", method: "DELETE", path: "/1" },
];

export default function CrudPractice() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function send(request) {
    setBusy(true);
    setMessage(request.method + " を送信中…");
    try {
      await requestJson(root + request.path, {
        method: request.method,
        ...(request.body && {
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(request.body),
        }),
      });
      setMessage(request.method + " の応答を受信。Networkで内容を確認。");
    } catch {
      setMessage(request.method + " の通信に失敗しました。再度ボタンを押してください。");
    } finally {
      setBusy(false);
    }
  }

  return (
    <section aria-labelledby="crud-title">
      <h2 id="crud-title">CRUDの通信練習</h2>
      <p>DummyJSONの見本データ。作成・更新・削除は応答だけを模擬。</p>
      <div className="guide-toolbar">
        {requests.map((request) => (
          <button key={request.method} type="button" disabled={busy}
            onClick={() => send(request)}>{request.label}</button>
        ))}
      </div>
      <p role="status">{message}</p>
    </section>
  );
}
