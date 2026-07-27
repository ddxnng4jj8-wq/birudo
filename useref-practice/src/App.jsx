import { useState, useEffect } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => res.json())
      .then((data) => setTodos(data));
  }, []);

  const handleAdd = () => {
    const newTodo = { title: "新しいタスク", userId: 1 };
    fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      body: JSON.stringify(newTodo),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((res) => res.json())
      .then((data) => setTodos([data, ...todos]));
  };

  return (
    <div>
      <button onClick={handleAdd}>追加</button>
      <ul>
        {todos.map((t) => <li key={t.id}>{t.title}</li>)}
      </ul>
    </div>
  );
}