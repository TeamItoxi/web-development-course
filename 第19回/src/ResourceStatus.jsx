// 通信結果の種類を、利用者に伝わる文と再試行ボタンへ変換する。
export default function ResourceStatus({ status, onRetry }) {
  if (status === "loading") {
    return <p className="guide-status" role="status">読み込み中…</p>;
  }
  if (status === "empty") {
    return <p className="guide-status" role="status">データが見つかりませんでした。</p>;
  }
  if (status === "error") {
    return (
      <div className="guide-status guide-error">
        <p role="alert">データを取得できませんでした。</p>
        <button type="button" onClick={onRetry}>再試行</button>
      </div>
    );
  }
  return null;
}
