export default function PokemonList({ items }) {
  return (
    <ul className="guide-grid">
      {items.map((item) => (
        <li key={item.name}><h3>{item.name}</h3></li>
      ))}
    </ul>
  );
}
