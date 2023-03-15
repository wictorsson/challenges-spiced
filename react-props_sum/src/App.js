import React from "react";
import "./styles.css";

export default function App() {
  return <Sum valueA={10} valueB={300} />;
}

function Sum({ valueA, valueB }) {
  let result = valueA + valueB;
  return (
    <h1>
      {valueA}+{valueB}={result}
    </h1>
  );
}
