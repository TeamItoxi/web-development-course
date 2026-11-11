export const favoriteKey = "zukan.react.favorite-ids";

// 保存内容を確認し、図鑑に存在するIDの配列だけを返す。
export function readFavoriteIds(animals) {
  try {
    const raw = localStorage.getItem(favoriteKey);
    const saved = raw === null ? [] : JSON.parse(raw);
    if (Array.isArray(saved)) {
      return [...new Set(saved.filter((id) =>
        animals.some((animal) => animal.id === id)))];
    }
  } catch {
    // 保存を使えない場合や読み取れない値では、空の配列から開始する。
  }
  return [];
}
