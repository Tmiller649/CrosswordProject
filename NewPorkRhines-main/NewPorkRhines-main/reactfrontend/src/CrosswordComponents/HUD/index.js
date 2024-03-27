import "./index.scss";
import React, { useState } from "react";

export const HUD = ({ makeGuess, requestCrossword, hasBeenWon }) => {
  const [numberToBeGuessed, setNum] = useState("");
  const [guess, setGuess] = useState("");
  const [vertical, setVertical] = useState(false);

  const [difficulty, setDifficulty] = useState("Easy");

  const handleNumChange = (event) => {
    setNum(event.target.value);
  };

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleOptionChange = (event) => {
    if (event.target.value === "Down") {
      setVertical(true);
    } else {
      setVertical(false);
    }
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    makeGuess(parseInt(numberToBeGuessed), vertical, guess);
  };

  const handleDifficultyChange = (event) => {
    setDifficulty(event.target.value);
  };

  const handleDifficultySubmit = (event) => {
    event.preventDefault();
    requestCrossword(difficulty);
  };

  return (
    <div className="CrosswordHUD">
      <div className="GameStart">
        <form
          id="StartGame"
          className="StartGame"
          onSubmit={handleDifficultySubmit}
        >
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Easy"
              checked={difficulty === "Easy"}
              onChange={handleDifficultyChange}
            />
            Easy
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Medium"
              checked={difficulty === "Medium"}
              onChange={handleDifficultyChange}
            />
            Medium
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="difficulty"
              value="Hard"
              checked={difficulty === "Hard"}
              onChange={handleDifficultyChange}
            />
            Hard
          </label>
          <br />
          <button id="startGame" type="submit">
            Start New Game
          </button>
          <br></br>
        </form>
      </div>
      {hasBeenWon ? (
        <p>YOU WON!</p>
      ) : (
        <div id="PlayGame">
          <form id="enterGuess" onSubmit={handleGuessSubmit}>
            <input
              type="text"
              value={guess}
              onChange={handleGuessChange}
              placeholder="Enter Guess Here"
            />
            <br />
            <input
              type="text"
              value={numberToBeGuessed}
              onChange={handleNumChange}
              placeholder="Enter Question Number Here"
            />
            <br />
            <label>
              <input
                type="radio"
                id="across"
                name="direction"
                value="Across"
                checked={!vertical}
                onChange={handleOptionChange}
              />
              Across
            </label>
            <br />
            <label>
              <input
                type="radio"
                id="down"
                name="direction"
                value="Down"
                checked={vertical}
                onChange={handleOptionChange}
              />
              Down
            </label>
            <br />
            <button type="submit">Make Guess</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HUD;
