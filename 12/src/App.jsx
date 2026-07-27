import Section from './Section';
import Item from './Item';

export default function App() {
  const fruits = [
    { id: 1, name: 'リンゴ' },
    { id: 2, name: 'バナナ' },
    { id: 3, name: 'オレンジ' }
  ];

  return (
    <div>
      {/* お題①：Section の練習 */}
      <Section title="Sectionその1">
        <p>ここに本文が入ります。</p>
      </Section>

      <Section title="Sectionその2">
        {/* ここを <ul> で囲むとどうなるか予想してみてください */}
        <p>箇条書きに変える準備中...</p>
      </Section>

      {/* お題②：map と Item の練習 */}
      <Section title="フルーツリスト">
        <ul>
          {fruits.map((fruit) => (
            <Item key={fruit.id} name={fruit.name} />
          ))}
        </ul>
      </Section>
    </div>
  );
}