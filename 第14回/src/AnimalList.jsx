import AnimalCard from "./AnimalCard.jsx";

export default function AnimalList({ items, favoriteIds, onToggle }) {
  if (items.length === 0) {
    return <p className="animal-empty">いきものが見つかりませんでした。</p>;
  }

  return (
    <div className="animal-grid">
      {items.map((animal) => (
        <AnimalCard key={animal.id} animal={animal}
          isFavorite={favoriteIds.includes(animal.id)} onToggle={onToggle} />
      ))}
    </div>
  );
}
