import { useState } from "react";
import SiteHeader from "./SiteHeader.jsx";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/25/";

export default function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function loadPokemon() {
    setMessage("取得中…");
    fetch(pokemonUrl)
      .then((response) => {
        if (!response.ok) throw new Error("HTTP error");
        return response.json();
      })
      .then((data) => {
        setName(data.name);
        setMessage("取得完了");
      })
      .catch(() => {
        setName("");
        setMessage("データを取得できませんでした。");
      });
  }

  return (
    <main>
      <SiteHeader />
      <section aria-labelledby="example-title">
        <h2 id="example-title">1件のデータ取得</h2>
        <button type="button" onClick={loadPokemon} disabled={message === "取得中…"}>
          No. 25 のデータを取得
        </button>
        <p role="status">{message}</p>
        {name && <p>APIで取得した名前 <strong>{name}</strong></p>}
      </section>
    </main>
  );
}
