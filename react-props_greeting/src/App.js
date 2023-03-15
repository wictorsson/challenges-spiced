import "./styles.css";

export default function App() {
  return <Greeting name="Sven" />;
}

export function Greeting({ name }) {
  return <h1>Hello, {name === "Sven" ? " Coach" : name}!</h1>;
}
