import { useState } from "react";

export default function PokemonImage({ image, name }) {
  const [failed, setFailed] = useState(false);
  if (!image || failed) return <p>画像を表示できません。</p>;
  return <img src={image} width="96" height="96" alt={name}
    onError={() => setFailed(true)} />;
}
