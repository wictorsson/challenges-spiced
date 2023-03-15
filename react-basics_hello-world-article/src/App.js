import React from "react";
import "./styles.css";

export default function App() {
  return HelloWorldArticle();
}

export function HelloWorldArticle() {
  return (
    <article>
      <h1>Header</h1>
      <p>Hello World</p>
    </article>
  );
}
