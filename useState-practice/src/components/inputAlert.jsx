import { useState } from "react";

const InputAlert = () => {
  const [inputVal, setInputVal] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputVal(value);
    alert(value); // 入力のたびにalertを表示する場合
  };

  return (
    <div>
      <p>入力欄の値を取得してalertで表示</p>
      <input
        type="text"
        value={inputVal}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputAlert;