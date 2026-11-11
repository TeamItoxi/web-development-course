import { useState } from "react";
import SiteHeader from "./SiteHeader.jsx";
import ResourceStatus from "./ResourceStatus.jsx";
import CrudPractice from "./CrudPractice.jsx";
import PokemonSearch from "./PokemonSearch.jsx";
import PokemonDetail from "./PokemonDetail.jsx";
import PokemonList from "./PokemonList.jsx";
import { fetchPokemonList } from "./api.js";
import { useResource } from "./useResource.js";

export default function App() {
  const [filter, setFilter] = useState("");
  const [offset, setOffset] = useState(0);
  const [selected, setSelected] = useState(null);
  const list = useResource(fetchPokemonList, offset);

  const visible = list.data?.items.filter((item) =>
    item.name.includes(filter.trim().toLowerCase())) ?? [];

  return (
    <main>
      <SiteHeader />
      <section aria-labelledby="detail-title">
        <h2 id="detail-title">名前・番号から探す</h2>
        <PokemonSearch onSearch={setSelected} />
        {selected && <PokemonDetail name={selected} />}
      </section>
      <section aria-labelledby="list-title">
        <h2 id="list-title">図鑑一覧</h2>
        <ResourceStatus status={list.status} onRetry={list.retry} />
        <label className="guide-form">このページの名前を絞り込み
          <input type="search" value={filter} onChange={(event) => setFilter(event.target.value)} />
        </label>
        {list.data && (visible.length > 0
          ? <PokemonList items={visible} onSelect={setSelected} />
          : <ResourceStatus status="empty" />)}
        <div className="guide-toolbar">
          <button type="button" disabled={offset === 0 || list.status === "loading"}
            onClick={() => setOffset((value) => value - 12)}>前の12件</button>
          <span role="status">{offset / 12 + 1}ページ目</span>
          <button type="button" disabled={!list.data?.hasNext}
            onClick={() => setOffset((value) => value + 12)}>次の12件</button>
        </div>
      </section>
      <CrudPractice />
    </main>
  );
}
