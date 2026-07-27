import { useState } from "react";

const ItemList = () => {
  const [count, setCount] = useState(2); // 初期値を2件に設定

  // 正しい更新: 新しいオブジェクトを渡す
  const handleAddItemCorrect = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      fontFamily: "sans-serif",
      color: "#333"
    }}>
      <h1 style={{
        fontSize: "2rem",
        fontWeight: "normal",
        marginBottom: "4rem"
      }}>
        ステートは直接書き換えない
      </h1>
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem"
      }}>
        <div style={{
          fontSize: "1.5rem",
          color: "#666"
        }}>
          {count} 件
        </div>
        <button
          onClick={handleAddItemCorrect}
          style={{
            padding: "10px 20px",
            fontSize: "1.2rem",
            cursor: "pointer",
            border: "1px solid #ccc",
            borderRadius: "5px",
            background: "white",
            transition: "all 0.2s"
          }}
          onMouseOver={(e) => e.currentTarget.style.background = "#f0f0f0"}
          onMouseOut={(e) => e.currentTarget.style.background = "white"}
        >
          追加
        </button>
      </div>
    </div>
  );
};

export default ItemList;