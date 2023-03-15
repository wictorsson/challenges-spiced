import React from "react";
import "./styles.css";

export default function App() {
  return <Smiley isHappy />;
}

function Smiley({ isHappy }) {
  return <div>{isHappy ? <h1>😀</h1> : <h1>😔</h1>}</div>;
}
