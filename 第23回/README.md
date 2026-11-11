# 第23回 総合制作のテスト・レスポンシブ・エラー対応

`pnpm test` で保存値・経路・APIデータを確認。テスト表を上から試し、通信失敗→再試行、0件、スマートフォン、キーボードを確認。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4183/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-23 dev` で起動。
