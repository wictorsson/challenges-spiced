import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana" },
    { id: 1, name: "🍏 apple" },
    { id: 2, name: "🍍 pineapple" },
    { id: 3, name: "🥝 kiwi" },
  ];

  return (
    <div className="app">
      {fruits.map(({ id, name }) => (
        <Card key={id} name={name} />
      ))}
      {/* <Card name="🍌 banana" /> */}
    </div>
  );
}
