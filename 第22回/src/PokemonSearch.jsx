import { useState } from "react";

export default function PokemonSearch({ onSearch }) {
  const [input, setInput] = useState("");
  const [hint, setHint] = useState("");

  function submit(event) {
    event.preventDefault();
    const name = input.trim().toLowerCase();
    if (!/^[a-z0-9-]{1,40}$/.test(name)) {
      setHint("英数字またはハイフンを1〜40文字で入力してください。");
      return;
    }
    setHint("");
    onSearch(name);
  }

  return (
    <>
      <form className="guide-form" onSubmit={submit}>
        <label>英語名・図鑑番号
          <input type="search" value={input} placeholder="例 pikachu"
            onChange={(event) => setInput(event.target.value)} />
        </label>
        <button type="submit">詳細を検索</button>
      </form>
      {hint && <p role="status">{hint}</p>}
    </>
  );
}
