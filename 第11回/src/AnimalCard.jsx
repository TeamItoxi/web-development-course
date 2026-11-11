export default function AnimalCard() {
  const name = "ペンギン";

  return (
    <article className="animal-card">
      <h3>{name}</h3>
      <img src="/images/penguin.svg" alt="氷の上に立つペンギン" />
      <p>翼を使って水の中を泳ぐ鳥。</p>
    </article>
  );
}
