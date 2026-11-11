import { useState } from "react";
import { fetchPokemonList } from "./api.js";
import { useResource } from "./useResource.js";
import PokemonList from "./PokemonList.jsx";
import PokemonSearch from "./PokemonSearch.jsx";
import ResourceStatus from "./ResourceStatus.jsx";
import { detailPath } from "./routes.js";

export default function ListScreen() {
  const [offset, setOffset] = useState(0);
  const [filter, setFilter] = useState("");
  const list = useResource(fetchPokemonList, offset);
  const visible = list.data?.items.filter((item) =>
    item.name.includes(filter.trim().toLowerCase())) ?? [];

  return (
    <section aria-labelledby="screen-title">
      <h2 id="screen-title">図鑑一覧</h2>
      <PokemonSearch onSearch={(name) => { location.hash = detailPath(name); }} />
      <label className="guide-form list-filter">このページの名前を絞り込み
        <input type="search" value={filter} onChange={(event) => setFilter(event.target.value)} />
      </label>
      <ResourceStatus status={list.status} onRetry={list.retry} />
      {list.status === "success" && (visible.length > 0
        ? <PokemonList items={visible} />
        : <ResourceStatus status="empty" />)}
      <div className="guide-toolbar">
        <button type="button" disabled={offset === 0 || list.status === "loading"}
          onClick={() => setOffset((value) => value - 12)}>前の12件</button>
        <span role="status">{offset / 12 + 1}ページ目</span>
        <button type="button" disabled={!list.data?.hasNext}
          onClick={() => setOffset((value) => value + 12)}>次の12件</button>
      </div>
    </section>
  );
}
