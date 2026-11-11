const baseUrl = "https://pokeapi.co/api/v2";

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
  const data = await requestJson(
    baseUrl + "/pokemon/" + encodeURIComponent(name) + "/", { signal },
  );
  return {
    id: data.id,
    name: data.name,
    height: data.height,
    types: data.types.map((entry) => entry.type.name),
    image: data.sprites.front_default,
  };
}
