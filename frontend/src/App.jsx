import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');
  const [text, setText] = useState('');

  // 1. ページ読み込み時にメッセージ一覧を取得する (GET)
  const fetchMessages = async () => {
    try {
      const response = await fetch('/api/messages');
      const data = await response.json();
      setMessages(data);
    } catch (err) {
      console.error('メッセージの取得に失敗しました', err);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // 2. メッセージを送信する (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username || !text) return;

    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, text }),
      });

      if (response.ok) {
        setText(''); // 入力欄をクリア
        fetchMessages(); // メッセージ一覧を再取得して更新
      }
    } catch (err) {
      console.error('メッセージの送信に失敗しました', err);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h2>リアルタイムチャット</h2>

      {/* 送信フォーム */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="名前 (ユーザー名)"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            placeholder="メッセージを入力..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ padding: '8px', width: '100%', boxSizing: 'border-box', height: '60px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer' }}>
          送信
        </button>
      </form>

      <hr />

      {/* メッセージ一覧表示 */}
      <div>
        <h3>メッセージ履歴</h3>
        {messages.length === 0 ? (
          <p>まだメッセージはありません。</p>
        ) : (
          messages.map((msg) => (
            <div key={msg.id} style={{ background: '#f9f9f9', padding: '10px', marginBottom: '8px', borderRadius: '4px' }}>
              <strong>{msg.username}</strong>: <span style={{ whiteSpace: 'pre-wrap' }}>{msg.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;