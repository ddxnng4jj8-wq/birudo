import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(12);

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <button onClick={handleClick}>
      {count} 回クリックされました
    </button>
  );
};

export default Counter;