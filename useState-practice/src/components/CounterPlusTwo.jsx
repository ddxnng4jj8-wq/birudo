import { useState } from "react";

const CounterPlusTwo = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  };

  return (
    <button onClick={handleClick}>
      {count}回押しました (+2)
    </button>
  );
};

export default CounterPlusTwo;