import { useState } from "react";
import SiteHeader from "./SiteHeader.jsx";
import ResourceStatus from "./ResourceStatus.jsx";
import { fetchPokemon } from "./api.js";

export default function App() {
  const [result, setResult] = useState({ status: "idle", item: null });

  async function load() {
    setResult({ status: "loading", item: null });
    try {
      const item = await fetchPokemon("pikachu");
      setResult({ status: "success", item });
    } catch (error) {
      const status = error.status === 404 ? "empty" : "error";
      setResult({ status, item: null });
    }
  }

  return (
    <main>
      <SiteHeader />
      <section aria-labelledby="fetch-title">
        <h2 id="fetch-title">通信状態の確認</h2>
        <button type="button" onClick={load} disabled={result.status === "loading"}>
          ピカチュウを取得
        </button>
        <ResourceStatus status={result.status} onRetry={load} />
        {result.item && <p className="result">取得成功 <strong>{result.item.name}</strong></p>}
      </section>
    </main>
  );
}
