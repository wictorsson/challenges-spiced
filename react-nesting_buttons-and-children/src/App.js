import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>Knapp eins</Button>
      <Button>Knapp zwei</Button>
      <Button>Knapp drei</Button>
      <Button>Knapp vier</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
