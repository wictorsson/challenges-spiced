import { useState } from "react";
import { getD6Roll } from "../../utils";
import D6 from "../D6";
import "./D6Button.css";

export function D6Button({ value, onRoll }) {
  // const [rolls, setRolls] = useState([]);

  // const handleRoll = () => {
  //   setRolls([{ value: getD6Roll(), time: Date.now() }, ...rolls]);
  // };

  // const currentRollValue = value[0]?.value;

  return (
    <button className="d6-button" type="button" onClick={onRoll}>
      <D6 value={value} />
    </button>
  );
}
