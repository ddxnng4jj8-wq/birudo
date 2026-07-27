// src/components/Header.jsx
export default function Header(props) {
  return (
    <header style={{ backgroundColor: '#282c34', color: 'white', padding: '16px', marginBottom: '20px' }}>
      <h1>{props.title}</h1>
    </header>
  );
}