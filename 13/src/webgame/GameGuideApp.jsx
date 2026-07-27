import { useState } from "react";
import { Button } from "./Button";

export function GameGuideApp() {
  // --- Week 13: useStateの追加 ---
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const [guides, setGuides] = useState([
    {
      id: 1,
      title: "序盤の効率的なレベル上げ",
      content: "エリア1の森でチェインを繋ぐと早い",
      isFavorite: false,
    },
  ]);

  const handleTitleChange = (event) => setTitleInput(event.target.value);
  const handleContentChange = (event) => setContentInput(event.target.value);

  const handleAddGuide = () => {
    if (titleInput.trim() === "" || contentInput.trim() === "") return;

    const newGuide = {
      id: Date.now(),
      title: titleInput,
      content: contentInput,
      isFavorite: false,
    };

    setGuides([...guides, newGuide]);
    setTitleInput("");
    setContentInput("");
  };

  const handleToggleFavorite = (id) => {
    setGuides(
      guides.map((guide) =>
        guide.id === id
          ? { ...guide, isFavorite: !guide.isFavorite }
          : guide
      )
    );
  };

  // --- 変更点: 指定したIDのメモを削除するハンドラ ---
  const handleDeleteGuide = (id) => {
    // filterを使って、削除するID以外のアイテムを残した新しい配列を作る (13-5)
    setGuides(guides.filter((guide) => guide.id !== id));
  };

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>🎮 ゲーム攻略情報共有アプリ（削除機能付き）</h2>

      {/* 入力フォーム */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
          background: "#f9f9f9",
        }}
      >
        <h3>攻略メモの投稿</h3>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            placeholder="攻略タイトル (例: ボスの弱点)"
            value={titleInput}
            onChange={handleTitleChange}
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
          />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <textarea
            placeholder="攻略のコツや手順..."
            value={contentInput}
            onChange={handleContentChange}
            style={{
              width: "100%",
              padding: "8px",
              boxSizing: "border-box",
              height: "80px",
            }}
          />
        </div>
        <Button onClick={handleAddGuide}>攻略情報を追加</Button>
      </div>

      {/* 投稿された攻略リストの表示 */}
      <div>
        <h3>みんなの攻略メモ一覧</h3>
        {guides.length === 0 ? (
          <p>まだ攻略情報がありません。</p>
        ) : (
          guides.map((guide) => (
            <div
              key={guide.id}
              style={{
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "6px",
                marginBottom: "10px",
                position: "relative",
                background: guide.isFavorite ? "#fff3cd" : "white",
              }}
            >
              {/* 操作ボタンをまとめるコンテナ */}
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  display: "flex",
                  gap: "8px",
                  alignItems: "center",
                }}
              >
                {/* お気に入りボタン */}
                <button
                  onClick={() => handleToggleFavorite(guide.id)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "1.2em",
                    color: guide.isFavorite ? "#ffc107" : "#ccc",
                  }}
                  aria-label={guide.isFavorite ? "お気に入り解除" : "お気に入り登録"}
                >
                  {guide.isFavorite ? "★" : "☆"}
                </button>

                {/* --- 変更点: 削除ボタン --- */}
                <button
                  onClick={() => handleDeleteGuide(guide.id)}
                  style={{
                    background: "#ff4d4f",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    padding: "3px 8px",
                    cursor: "pointer",
                    fontSize: "0.9em",
                  }}
                >
                  削除
                </button>
              </div>

              <h4 style={{ marginRight: "100px" }}>{guide.title}</h4>
              <p>{guide.content}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}