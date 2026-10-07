import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [guides, setGuides] = useState([]);
  const [gameTitle, setGameTitle] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [searchKeyword, setSearchKeyword] = useState(''); // 検索キーワード用の状態

  const fetchGuides = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/guides');
      const data = await response.json();
      setGuides(data);
    } catch (err) {
      console.error('攻略情報の取得に失敗しました', err);
    }
  };

  useEffect(() => {
    fetchGuides();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!gameTitle || !title || !content) return;

    try {
      const response = await fetch('http://localhost:3000/api/guides', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameTitle, title, content }),
      });

      if (response.ok) {
        setGameTitle('');
        setTitle('');
        setContent('');
        fetchGuides();
      }
    } catch (err) {
      console.error('攻略情報の送信に失敗しました', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/guides/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchGuides();
      }
    } catch (err) {
      console.error('攻略情報の削除に失敗しました', err);
    }
  };

  // 1. 検索キーワードに一致するものだけに絞り込む
  const filteredGuides = guides.filter((guide) => {
    const keyword = searchKeyword.toLowerCase();
    return (
      guide.gameTitle.toLowerCase().includes(keyword) ||
      guide.title.toLowerCase().includes(keyword) ||
      guide.content.toLowerCase().includes(keyword)
    );
  });

  // 2. 絞り込んだデータを、ゲームタイトルと記事タイトルでひとまとめにする処理
  const groupedGuides = filteredGuides.reduce((acc, guide) => {
    const key = `${guide.gameTitle}_${guide.title}`;
    if (!acc[key]) {
      acc[key] = {
        gameTitle: guide.gameTitle,
        title: guide.title,
        items: []
      };
    }
    acc[key].items.push(guide);
    return acc;
  }, {});

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2>🎮 ゲーム攻略情報共有アプリ</h2>

      {/* 投稿フォーム */}
      <form onSubmit={handleSubmit} style={{ background: '#f9f9f9', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <h3>攻略情報を投稿</h3>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="ゲームタイトル (例: モンスターハンター)"
            value={gameTitle}
            onChange={(e) => setGameTitle(e.target.value)}
            style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="記事タイトル (例: ボス攻略)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ padding: '8px', width: '100%', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <textarea
            placeholder="攻略の内容やコツを入力..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={{ padding: '8px', width: '100%', boxSizing: 'border-box', height: '80px' }}
          />
        </div>
        <button type="submit" style={{ padding: '10px 20px', background: '#007bff', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
          投稿する
        </button>
      </form>

      <hr />

      {/* 検索ボックス */}
      <div style={{ marginBottom: '20px' }}>
        <h3>攻略情報を検索</h3>
        <input
          type="text"
          placeholder="ゲーム名、記事名、キーワードで検索..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          style={{ padding: '10px', width: '100%', boxSizing: 'border-box', borderRadius: '6px', border: '1px solid #ccc' }}
        />
      </div>

      {/* 攻略情報一覧表示 */}
      <div>
        <h3>攻略情報一覧</h3>
        {Object.keys(groupedGuides).length === 0 ? (
          <p>該当する攻略情報は見つかりませんでした。</p>
        ) : (
          Object.values(groupedGuides).map((group, index) => (
            <div key={index} style={{ background: '#fff', padding: '15px', marginBottom: '15px', borderRadius: '8px', border: '1px solid #ccc', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
              <span style={{ fontSize: '11px', background: '#007bff', color: '#fff', padding: '2px 8px', borderRadius: '10px', fontWeight: 'bold' }}>
                {group.gameTitle}
              </span>
              
              <h3 style={{ margin: '8px 0 12px 0', fontSize: '20px', color: '#333', borderBottom: '2px solid #eee', paddingBottom: '6px' }}>
                {group.title}
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {group.items.map((item) => (
                  <div key={item.id} style={{ background: '#f8f9fa', padding: '10px 12px', borderRadius: '6px', border: '1px solid #e9ecef', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <p style={{ margin: 0, whiteSpace: 'pre-wrap', flex: 1, color: '#495057' }}>{item.content}</p>
                    <button
                      onClick={() => handleDelete(item.id)}
                      style={{ background: '#ff4d4d', color: '#fff', border: 'none', padding: '5px 10px', borderRadius: '4px', cursor: 'pointer', marginLeft: '12px', fontSize: '12px', height: 'fit-content', flexShrink: 0 }}
                    >
                      削除
                    </button>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;