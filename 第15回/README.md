# 第15回 useEffectとReact版図鑑の完成

第14回のフォームと絞り込みを継続。動物を登録し、同じURLで再読み込みして件数とカードの登録表示を確認。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4175/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-15 dev` で起動。
