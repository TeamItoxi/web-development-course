# GitHub Pagesで公開

## 公開前

1. 第24回のプロジェクトだけを新規フォルダへ複製。node_modules と dist は除外。
2. PowerShellで `npm install`、`npm test`、`npm run build`、`npm run preview`。
3. 表示されたURLで一覧・詳細・お気に入りを確認。別の場所で開くときのURLも確認。
4. プロジェクトのルートに .gitignore を作り、node_modules/、dist/、.env* を除外。
5. 作成された package-lock.json を確認し、公開するリポジトリに含める。

## 公開

1. 公開対象のファイルを確認。個人情報、認証情報、公開許可のない画像は除外。
2. 自分で管理する公開用リポジトリを作成。main にコードを追加。
3. Settings → Pages → Build and deployment → Source で GitHub Actions を選択。
4. プロジェクトのルートに .github/workflows を作成し、このフォルダの pages.yml をその中へ配置。
5. main へコミットしてプッシュ。Actions の build と deploy の結果を確認。
6. Pages に表示される公開URLを別のブラウザーで開き、一覧・詳細の直リンク・お気に入りを確認。
7. README に公開URLとデータ提供元のリンクを追加。

公開手順のワークフローは、単独プロジェクトのルートを対象に、npm ci でインストールして dist を公開する。

- [GitHub Pages公式のワークフロー](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages)
- [Viteの静的サイト公開ガイド](https://vite.dev/guide/static-deploy.html)
- [データ提供元 PokéAPI](https://pokeapi.co/)
