import { useState } from "react";

export default function AnimalCard({ animal }) {
  const [isFavorite, setIsFavorite] = useState(false);

  function handleFavoriteClick() {
    setIsFavorite((current) => !current);
  }

  return (
    <article className="animal-card" id={animal.id}>
      <h3>{animal.name}</h3>
      <img src={animal.imageSrc} alt={animal.imageAlt} />
      <p>{animal.description}</p>
      <button
        className="favorite-button"
        type="button"
        onClick={handleFavoriteClick}
        aria-pressed={isFavorite}
        aria-label={animal.name + "のお気に入り"}
      >
        {isFavorite ? "登録済み" : "お気に入り"}
      </button>
    </article>
  );
}
