import Counter from './components/Counter';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px", fontFamily: "sans-serif" }}>
      <h2 style={{ marginBottom: "20px", fontWeight: "normal" }}>ステートはコンポーネントごとに存在する</h2>
      <div style={{ display: "flex", flexDirection: "column", width: "300px" }}>
        <Counter />
        <Counter />
      </div>
    </div>
  );
}

export default App;