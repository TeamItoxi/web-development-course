// Appのstateを受け取り、入力の変化を親へ通知する。
export default function SearchControls({
  keyword, category, onlyFavorites, onKeyword, onCategory, onOnlyFavorites,
}) {
  return (
    <div className="filters" role="search" aria-label="いきものの絞り込み">
      <label>
        名前
        <input type="search" value={keyword}
          onChange={(event) => onKeyword(event.target.value)} />
      </label>
      <label>
        分類
        <select value={category} onChange={(event) => onCategory(event.target.value)}>
          <option value="">すべて</option>
          <option value="mammal">ほ乳類</option>
          <option value="bird">鳥類</option>
        </select>
      </label>
      <label className="checkbox">
        <input type="checkbox" checked={onlyFavorites}
          onChange={(event) => onOnlyFavorites(event.target.checked)} />
        お気に入りのみ
      </label>
    </div>
  );
}
