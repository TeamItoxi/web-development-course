# Web開発講座 完成コード

「自分だけのWeb図鑑」を作るWeb開発講座の、各回の終了時点のコード集。

## 各回の完成形

| 回 | 内容 | コード |
| --- | --- | --- |
| 第1回 | HTML・CSSによる図鑑の表紙 | [第1回](第1回/) |
| 第2回 | 画像・リンクの追加 | [第2回](第2回/) |
| 第3回 | CSSとボックスモデルによる紹介カード | [第3回](第3回/) |
| 第4回 | Flexbox・Gridによるレスポンシブ図鑑 | [第4回](第4回/) |
| 第5回 | 静的なWeb図鑑の完成 | [第5回](第5回/) |
| 第6回 | JavaScriptの変数・値・演算 | [第6回](第6回/) |
| 第7回 | JavaScriptの条件分岐・繰り返し | [第7回](第7回/) |
| 第8回 | JavaScriptの配列・オブジェクト・関数 | [第8回](第8回/) |
| 第9回 | JavaScriptのDOM・イベント・検索フォーム | [第9回](第9回/) |
| 第10回 | 絞り込み・お気に入り・localStorage | [第10回](第10回/) |
| 第11回 | ReactのJSX・コンポーネント | [第11回](第11回/) |
| 第12回 | ReactのProps・一覧表示・条件分岐 | [第12回](第12回/) |
| 第13回 | ReactのuseState・イベント | [第13回](第13回/) |

各フォルダに、その回の終了時点で必要なファイル一式を保存。前の回のフォルダに依存せず、単独で確認できる構成。

## 構成

~~~text
web-development-course/
├── 第1回/
│   ├── README.md
│   ├── index.html
│   └── style.css
├── 第2回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   └── images/
│       └── red-panda.png
├── 第3回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   └── images/
│       └── red-panda.png
├── 第4回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   └── images/
│       ├── red-panda.png
│       ├── penguin.svg
│       └── capybara.svg
├── 第5回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   ├── form-practice.html
│   └── images/
│       ├── red-panda.png
│       ├── penguin.svg
│       └── capybara.svg
├── 第6回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── display-practice.js
│   ├── form-practice.html
│   └── images/
│       ├── red-panda.png
│       ├── penguin.svg
│       └── capybara.svg
├── 第7回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── display-practice.js
│   ├── form-practice.html
│   └── images/
│       ├── red-panda.png
│       ├── penguin.svg
│       └── capybara.svg
├── 第8回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── animals.js
│   ├── display-practice.js
│   ├── form-practice.html
│   └── images/
│       ├── red-panda.png
│       ├── penguin.svg
│       └── capybara.svg
├── 第9回/
│   ├── README.md
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── animals.js
│   ├── display-practice.js
│   ├── form-practice.html
│   └── images/
│       ├── red-panda.png
│       ├── penguin.svg
│       └── capybara.svg
├── 第10回/
├── 第11回/
├── 第12回/
├── 第13回/
├── package.json
├── pnpm-workspace.yaml
└── pnpm-lock.yaml
~~~

## 第1回〜第13回の確認

1. GitHubの「Code」から「Download ZIP」でダウンロード、またはリポジトリをclone
2. ZIPの場合は展開
3. 第1〜9回は該当回の `index.html` をChromeまたはEdgeで開く。第10〜13回は開発サーバーで起動

第1〜5回はHTMLとCSS、第6〜10回はJavaScript、第11回以降はReact。第10回は毎回同じURLを使うと、ブラウザーに保存したお気に入りを再表示できる。

## パッケージ管理

依存パッケージが必要になる回では、ディスク使用量を抑えやすいpnpmを基本に利用。現在の設定はpnpm 11.22.0、Node.js 24系。

~~~sh
pnpm install
~~~

npmでのインストールも利用可能。

~~~sh
npm install
~~~

第10回以降でVite、第11回以降でReactを使用。ルートで依存を入れたあと、対象回を指定して起動。

~~~sh
pnpm --filter zukan-13 dev
~~~

npmでの起動。

~~~sh
npm run dev --workspace=zukan-13
~~~

第10〜13回のURLはそれぞれ http://127.0.0.1:4170/ 〜 http://127.0.0.1:4173/ 。停止は Ctrl+C。

今後の回は、各フォルダのREADMEに起動手順を記載。pnpmとnpmに対応したワークスペース設定を用意し、pnpm専用の依存参照形式は使用しない方針。

ロックファイルの正本は `pnpm-lock.yaml`。npmではこのロックファイルを使用しないため、同じ依存バージョンでの再現にはpnpmを利用。npmが生成する `package-lock.json` はGit管理の対象外。

## 学習時の使い方

- 授業は自分の手でファイルを作成し、コードを入力
- 完成コードは復習・動作確認・困った箇所の比較用
- 次の回の追加時も、以前の回の完成形はその時点の状態を維持
- 教材の訂正時は、該当回のREADMEとGit履歴へ変更を記録

## 画像

第2回のレッサーパンダは、本講座向けにAI生成したイラスト。動物の実写写真ではない。

## 参考

- [pnpmのディスク使用量削減の仕組み](https://pnpm.io/motivation)
- [pnpmのワークスペース設定](https://pnpm.io/pnpm-workspace_yaml)
- [npmのワークスペース](https://docs.npmjs.com/cli/v11/using-npm/workspaces/)
