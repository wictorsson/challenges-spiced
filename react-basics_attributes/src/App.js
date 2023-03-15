import React from "react";
import "./styles.css";

export default function App() {
  return (
    <article>
      <h2 className="article__title">I am the article title</h2>
      <label htmlFor="wikipedia">Labeltext</label>
      <input type="checkbox" name="wikipedia" id="wikipedia"></input>
      <a href="https://www.wikipedia.com" className="article__link">
        Visit wikipedia!
      </a>
    </article>
  );
}
