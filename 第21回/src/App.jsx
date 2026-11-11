import SiteHeader from "./SiteHeader.jsx";

export default function App() {
  return (
    <main>
      <SiteHeader />
      <nav className="guide-nav" aria-label="画面の見取り図">
        <a className="guide-link" href="#list">一覧</a>
        <a className="guide-link" href="#detail">詳細</a>
        <a className="guide-link" href="#favorites">お気に入り</a>
      </nav>
      <section className="result" id="list">
        <h2>一覧</h2><p>名前から候補を探し、詳しく見る項目を選択。</p>
      </section>
      <section className="result" id="detail">
        <h2>詳細</h2><p>画像・タイプ・高さ。あとで見たい項目を登録。</p>
      </section>
      <section className="result" id="favorites">
        <h2>お気に入り</h2><p>保存した項目の一覧から詳細へ戻る。</p>
      </section>
    </main>
  );
}
