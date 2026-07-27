// src/App.jsx
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

export default function App() {
  // ステップ1・2：イベントハンドラの定義
  const handleAdd = () => {
    alert('「追加」ボタンがクリックされました！');
  };

  const handleDelete = (taskText) => {
    console.log(`「${taskText}」の削除ボタンが押されました`);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <Header title="マイ・タスク管理アプリ" />
      
      <main style={{ padding: '0 16px' }}>
        {/* ハンドラを props として子に渡す */}
        <TaskForm onAddTask={handleAdd} />
        <TaskList onDeleteTask={handleDelete} />
      </main>
    </div>
  );
}