import { useEffect, useState } from "react";
import SiteHeader from "./SiteHeader.jsx";
import SearchControls from "./SearchControls.jsx";
import AnimalList from "./AnimalList.jsx";
import { animals } from "./animals.js";
import { favoriteKey, readFavoriteIds } from "./favorites.js";

export default function App() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [favoriteIds, setFavoriteIds] = useState(() => readFavoriteIds(animals));
  const [storageWarning, setStorageWarning] = useState("");

  // お気に入りのstateが変わったときだけ、ブラウザーの保存内容を同期する。
  useEffect(() => {
    try {
      localStorage.setItem(favoriteKey, JSON.stringify(favoriteIds));
      setStorageWarning("");
    } catch {
      setStorageWarning("お気に入りを保存できませんでした。");
    }
  }, [favoriteIds]);

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
        {storageWarning && <p role="status">{storageWarning}</p>}
        <AnimalList items={visibleAnimals} favoriteIds={favoriteIds}
          onToggle={toggleFavorite} />
      </section>
    </main>
  );
}
