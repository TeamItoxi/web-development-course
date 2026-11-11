import SiteHeader from "./SiteHeader.jsx";
import AnimalList from "./AnimalList.jsx";
import { animals } from "./animals.js";

export default function App() {
  return (
    <main id="top">
      <SiteHeader />
      <section aria-labelledby="animals-title">
        <h2 id="animals-title">いきもの一覧</h2>
        <AnimalList items={animals} />
      </section>
    </main>
  );
}
