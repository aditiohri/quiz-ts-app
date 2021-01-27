import React from "react";
import { Difficulty } from "../types/enum";

// convert Difficulty object into array of objects with
// level and label properties
let difficultyOptions = [
    Difficulty.EASY,
    Difficulty.MEDIUM,
    Difficulty.HARD
]

export default function DropdownInput() {
  return (
    <div>
      <select onChange={(e) => console.log(e.target.value)}>
          {difficultyOptions.map((item, id) => (
              <option key={Math.random() * id+1} value={item}>{item}</option>
          ))}
      </select>
    </div>
  );
}
