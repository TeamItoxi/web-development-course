// 登録状態は親から受け取り、クリックで動物のIDを渡す。
export default function AnimalCard({ animal, isFavorite, onToggle }) {
  return (
    <article className="animal-card" id={animal.id}>
      <h3>{animal.name}</h3>
      <img src={animal.imageSrc} alt={animal.imageAlt} />
      <p>{animal.description}</p>
      <button
        className="favorite-button"
        type="button"
        onClick={() => onToggle(animal.id)}
        aria-pressed={isFavorite}
        aria-label={animal.name + "のお気に入り"}
      >
        {isFavorite ? "登録済み" : "お気に入り"}
      </button>
    </article>
  );
}
