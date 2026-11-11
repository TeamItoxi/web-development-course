import { useState } from "react";
import SiteHeader from "./SiteHeader.jsx";
import ResourceStatus from "./ResourceStatus.jsx";
import PokemonList from "./PokemonList.jsx";
import { fetchPokemonList } from "./api.js";
import { useResource } from "./useResource.js";

export default function App() {
  const [offset, setOffset] = useState(0);
  const list = useResource(fetchPokemonList, offset);

  return (
    <main>
      <SiteHeader />
      <section aria-labelledby="list-title">
        <h2 id="list-title">図鑑一覧</h2>
        <ResourceStatus status={list.status} onRetry={list.retry} />
        {list.data && <PokemonList items={list.data.items} />}
        <div className="guide-toolbar">
          <button type="button" disabled={offset === 0 || list.status === "loading"}
            onClick={() => setOffset((value) => value - 12)}>前の12件</button>
          <span role="status">{offset / 12 + 1}ページ目</span>
          <button type="button" disabled={!list.data?.hasNext}
            onClick={() => setOffset((value) => value + 12)}>次の12件</button>
        </div>
      </section>
    </main>
  );
}
