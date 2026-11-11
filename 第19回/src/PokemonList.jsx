export default function PokemonList({ items, onSelect }) {
  return (
    <ul className="guide-grid">
      {items.map((item) => (
        <li key={item.name}>
          <h3>{item.name}</h3>
          <button type="button" onClick={() => onSelect(item.name)}>
            {item.name} の詳細
          </button>
        </li>
      ))}
    </ul>
  );
}
