// src/components/Button.jsx
export default function Button(props) {
  return (
    <button 
      onClick={props.onClick} 
      style={{ padding: '8px 16px', cursor: 'pointer' }}
    >
      {props.children}
    </button>
  );
}