// src/components/TaskList.jsx
import Card from './Card';
import Button from './Button';

export default function TaskList(props) {
  const dummyTasks = [
    { id: 1, text: 'Reactの基礎を復習する' },
    { id: 2, text: 'コンポーネント分割を試す' },
    { id: 3, text: 'propsとchildrenを理解する' },
  ];

  return (
    <Card>
      <h3>タスク一覧</h3>
      <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
        {dummyTasks.map((task) => (
          <li key={task.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <span>{task.text}</span>
            <Button onClick={() => props.onDeleteTask(task.text)}>削除</Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}