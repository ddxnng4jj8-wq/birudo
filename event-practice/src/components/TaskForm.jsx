// src/components/TaskForm.jsx
import Card from './Card';
import Button from './Button';

export default function TaskForm(props) {
  return (
    <Card>
      <h3>新しいタスクを追加</h3>
      <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <input type="text" placeholder="タスク名を入力..." style={{ flex: 1, padding: '8px' }} />
        {/* props.onAddTask を Button の onClick に渡す */}
        <Button onClick={props.onAddTask}>追加</Button>
      </div>
    </Card>
  );
}