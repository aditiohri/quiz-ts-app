import React from "react";
import { Difficulty } from "../types/enum";
import { InputProps } from "../types/type";

// convert Difficulty object into array of objects with
// level and label properties
let difficultyOptions = [Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD];

const DropdownInput: React.FC<InputProps> = ({ setQuizDifficulty }) => {
  return (
    <div>
      <select onChange={(e) => setQuizDifficulty(e)}>
        {difficultyOptions.map((item, id) => (
          <option key={Math.random() * id + 1} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;
