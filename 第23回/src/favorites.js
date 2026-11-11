export const favoriteKey = "zukan.pokedex.favorite-names";

export function parseFavorites(raw) {
  try {
    const values = JSON.parse(raw ?? "[]");
    if (Array.isArray(values)) {
      return [...new Set(values.filter((value) =>
        typeof value === "string" && /^[a-z0-9-]{1,40}$/.test(value)))];
    }
  } catch {
    // 壊れた保存値は空の配列として扱う。
  }
  return [];
}

export function readFavorites() {
  try {
    return parseFavorites(localStorage.getItem(favoriteKey));
  } catch {
    return [];
  }
}
