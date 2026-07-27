// src/components/Card.jsx
export default function Card(props) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '12px', backgroundColor: '#fff' }}>
      {props.children}
    </div>
  );
}