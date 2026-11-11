import SiteHeader from "./SiteHeader.jsx";
import AnimalCard from "./AnimalCard.jsx";

export default function App() {
  return (
    <main id="top">
      <SiteHeader />
      <section aria-labelledby="animals-title">
        <h2 id="animals-title">いきもの一覧</h2>
        <div className="animal-grid">
          <AnimalCard />
        </div>
      </section>
    </main>
  );
}
