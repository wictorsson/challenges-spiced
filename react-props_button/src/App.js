import React from "react";
import "./styles.css";

export default function App() {
  function handleClick() {
    console.log("Button clicked");
  }

  return (
    <Button
      color="red"
      disabled={false}
      text="Blablablabla"
      onClick={handleClick}
    ></Button>
  );
}

function Button({ color, disabled, text, onClick }) {
  return (
    <button
      type="button"
      disabled={disabled}
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
