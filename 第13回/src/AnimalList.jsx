import AnimalCard from "./AnimalCard.jsx";

export default function AnimalList({ items }) {
  if (items.length === 0) {
    return <p className="animal-empty">いきものが見つかりませんでした。</p>;
  }

  return (
    <div className="animal-grid">
      {items.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
}
