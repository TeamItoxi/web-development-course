import { useEffect, useState } from "react";
import SiteHeader from "./SiteHeader.jsx";
import ListScreen from "./ListScreen.jsx";
import PokemonDetail from "./PokemonDetail.jsx";
import PokemonList from "./PokemonList.jsx";
import { useRoute } from "./useRoute.js";
import { favoriteKey, readFavorites } from "./favorites.js";

export default function App() {
  const route = useRoute();
  const [favoriteNames, setFavoriteNames] = useState(readFavorites);
  const [storageWarning, setStorageWarning] = useState("");

  useEffect(() => {
    try {
      localStorage.setItem(favoriteKey, JSON.stringify(favoriteNames));
      setStorageWarning("");
    } catch {
      setStorageWarning("お気に入りを保存できませんでした。");
    }
  }, [favoriteNames]);

  function toggleFavorite(name) {
    setFavoriteNames((current) => current.includes(name)
      ? current.filter((item) => item !== name)
      : [...current, name]);
  }

  return (
    <main>
      <SiteHeader />
      <nav className="guide-nav" aria-label="図鑑の画面">
        <a className="guide-link" href="#list"
          aria-current={route.view === "list" ? "page" : undefined}>一覧</a>
        <a className="guide-link" href="#favorites"
          aria-current={route.view === "favorites" ? "page" : undefined}>お気に入り</a>
      </nav>
      {storageWarning && <p role="status">{storageWarning}</p>}
      {route.view === "list" && <ListScreen />}
      {route.view === "detail" && (
        <section aria-labelledby="screen-title">
          <h2 id="screen-title">観察の詳細</h2>
          <PokemonDetail name={route.name} favoriteNames={favoriteNames}
            onFavorite={toggleFavorite} />
        </section>
      )}
      {route.view === "favorites" && (
        <section aria-labelledby="screen-title">
          <h2 id="screen-title">お気に入り</h2>
          {favoriteNames.length === 0
            ? <p className="guide-status">お気に入りはまだありません。</p>
            : <PokemonList items={favoriteNames.map((name) => ({ name }))} />}
        </section>
      )}
    </main>
  );
}
