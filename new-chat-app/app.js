const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// データベースの代わりにメモリ上でメッセージを保存する配列
let messages = [
  { id: 1, username: 'システム', text: 'チャットアプリへようこそ！' }
];

// GET: メッセージ一覧を取得
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

// POST: メッセージを追加
app.post('/api/messages', (req, res) => {
  const { username, text } = req.body;
  const newMessage = {
    id: messages.length + 1,
    username: username,
    text: text,
  };
  messages.push(newMessage);
  res.json(newMessage);
});

app.listen(port, () => {
  console.log(`Express サーバーがポート ${port} で起動しました！`);
});