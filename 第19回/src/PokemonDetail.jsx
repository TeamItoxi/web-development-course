import ResourceStatus from "./ResourceStatus.jsx";
import { fetchPokemon } from "./api.js";
import { useResource } from "./useResource.js";

export default function PokemonDetail({ name, favorite, onFavorite }) {
  const detail = useResource(fetchPokemon, name);

  if (!detail.data) {
    return <ResourceStatus status={detail.status} onRetry={detail.retry} />;
  }
  const item = detail.data;
  return (
    <article className="guide-detail result">
      <h3>{item.name}</h3>
      {item.image && <img src={item.image} width="96" height="96" alt={item.name} />}
      <dl>
        <dt>図鑑番号</dt><dd>{item.id}</dd>
        <dt>タイプ</dt><dd>{item.types.join(" / ")}</dd>
        <dt>高さ</dt><dd>{item.height / 10} m</dd>
      </dl>
      {onFavorite && (
        <button type="button" aria-pressed={favorite} onClick={() => onFavorite(item.name)}>
          {favorite ? "お気に入りを解除" : "お気に入りに登録"}
        </button>
      )}
    </article>
  );
}
