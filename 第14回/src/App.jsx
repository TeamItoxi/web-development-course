import { useState } from "react";
import SiteHeader from "./SiteHeader.jsx";
import SearchControls from "./SearchControls.jsx";
import AnimalList from "./AnimalList.jsx";
import { animals } from "./animals.js";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState([]);

  // 同じ登録IDをカード、件数、絞り込みに使う。
  function toggleFavorite(id) {
    setFavoriteIds((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id]);
  }

  const visibleAnimals = animals.filter((animal) => {
    return animal.name.includes(keyword.trim())
      && (!category || animal.category === category)
      && (!onlyFavorites || favoriteIds.includes(animal.id));
  });

  return (
    <main id="top">
      <SiteHeader />
      <section aria-labelledby="animals-title">
        <h2 id="animals-title">いきもの一覧</h2>
        <SearchControls keyword={keyword} category={category}
          onlyFavorites={onlyFavorites} onKeyword={setKeyword}
          onCategory={setCategory} onOnlyFavorites={setOnlyFavorites} />
        <p role="status">表示 {visibleAnimals.length}件 ／ お気に入り {favoriteIds.length}件</p>
        <AnimalList items={visibleAnimals} favoriteIds={favoriteIds}
          onToggle={toggleFavorite} />
      </section>
    </main>
  );
}
