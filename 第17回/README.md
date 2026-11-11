# 第17回 async・await・通信状態

ボタンで取得。開発者ツールで通信速度を落としたときの読み込み、オフライン時のエラー、接続復帰後の再試行を確認。

## 起動

1. Node.js 24系を使用。フォルダ内で PowerShell を開く。
2. `pnpm install`、`pnpm dev` の順に実行。npmの場合は `npm install`、`npm run dev`。
3. ブラウザーで `http://127.0.0.1:4177/` を開く。停止は Ctrl+C。

リポジトリ全体では、ルートで `pnpm install` を実行し、`pnpm --filter zukan-17 dev` で起動。
