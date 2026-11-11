export default function AnimalCard({ animal }) {
  return (
    <article className="animal-card" id={animal.id}>
      <h3>{animal.name}</h3>
      <img src={animal.imageSrc} alt={animal.imageAlt} />
      <p>{animal.description}</p>
    </article>
  );
}
