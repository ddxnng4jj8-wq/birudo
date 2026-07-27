const PlainCounter = () => {
  let count = 0; // useState を使わない、ただの変数

  const handleClick = () => {
    count = count + 1;
    console.log(count); // コンソールでは 1, 2, 3... と増える
  };

  return <button onClick={handleClick}>{count}</button>;
};

export default PlainCounter;