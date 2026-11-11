import test from "node:test";
import assert from "node:assert/strict";
import { parseRoute } from "../src/routes.js";
import { parseFavorites } from "../src/favorites.js";
import { toPokemon, toPokemonList } from "../src/api.js";

test("詳細への直リンクと不正な経路", () => {
  assert.deepEqual(parseRoute("#detail/pikachu"), { view: "detail", name: "pikachu" });
  assert.deepEqual(parseRoute("#favorites"), { view: "favorites" });
  assert.deepEqual(parseRoute("#detail/a/b"), { view: "list" });
});

test("保存値の復元・重複除去・壊れた値", () => {
  assert.deepEqual(parseFavorites('["pikachu","pikachu",3,"a/b"]'), ["pikachu"]);
  assert.deepEqual(parseFavorites("{broken"), []);
});

test("一覧の空と不正レスポンス", () => {
  assert.deepEqual(toPokemonList({ results: [], next: null }), { items: [], hasNext: false });
  assert.throws(() => toPokemonList({ results: [{ name: null }] }));
});

test("詳細の変換と必須項目の確認", () => {
  assert.deepEqual(toPokemon({
    id: 25, name: "pikachu", height: 4,
    types: [{ type: { name: "electric" } }], sprites: {},
  }), { id: 25, name: "pikachu", height: 4, types: ["electric"], image: null });
  assert.throws(() => toPokemon({ id: 25, name: "pikachu", height: null }));
});
