import { detailPath } from "./routes.js";

export default function PokemonList({ items }) {
  return (
    <ul className="guide-grid">
      {items.map((item) => (
        <li key={item.name}>
          <h3>{item.name}</h3>
          <a className="guide-link" href={detailPath(item.name)}>
            {item.name} の詳細
          </a>
        </li>
      ))}
    </ul>
  );
}
