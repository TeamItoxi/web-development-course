const baseUrl = "https://pokeapi.co/api/v2";
const pokemonCache = new Map();
const listCache = new Map();

export function toPokemon(data) {
  if (!Number.isInteger(data?.id) || typeof data.name !== "string"
      || !Number.isFinite(data.height) || !Array.isArray(data.types)
      || !data.types.every((entry) => typeof entry?.type?.name === "string")) {
    throw new Error("Invalid Pokémon data");
  }
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    types: data.types.map((entry) => entry.type.name),
    image: typeof data.sprites?.front_default === "string" ? data.sprites.front_default : null,
  };
}

export function toPokemonList(data) {
  if (!Array.isArray(data?.results)
      || !data.results.every((entry) => typeof entry?.name === "string"
        && /^[a-z0-9-]{1,40}$/.test(entry.name))) {
    throw new Error("Invalid list");
  }
  return {
    items: data.results.map((entry) => ({ name: entry.name })),
    hasNext: Boolean(data.next),
  };
}

// HTTPの成功を確認してから、レスポンスのJSONをJavaScriptの値へ変換する。
export async function requestJson(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    const error = new Error("HTTP error");
    error.status = response.status;
    throw error;
  }
  return response.json();
}

export async function fetchPokemon(name, signal) {
  if (pokemonCache.has(name)) return pokemonCache.get(name);
  const data = await requestJson(
    baseUrl + "/pokemon/" + encodeURIComponent(name) + "/", { signal },
  );
  const item = toPokemon(data);
  if (!signal?.aborted) {
    pokemonCache.set(item.name, item);
    pokemonCache.set(String(item.id), item);
  }
  return item;
}

// 成功したページは同じ訪問中に再利用し、不要な再通信を減らす。
export async function fetchPokemonList(offset, signal) {
  if (listCache.has(offset)) return listCache.get(offset);
  const params = new URLSearchParams({ limit: "12", offset: String(offset) });
  const data = await requestJson(baseUrl + "/pokemon/?" + params, { signal });
  const page = toPokemonList(data);
  if (!signal?.aborted) listCache.set(offset, page);
  return page;
}
