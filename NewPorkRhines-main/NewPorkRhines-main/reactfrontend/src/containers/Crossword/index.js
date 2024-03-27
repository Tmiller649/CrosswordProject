import "./index.scss";
import React, { useState } from "react";
import Header from "../../CrosswordComponents/Header";
import Display from "../../CrosswordComponents/Display";
import HUD from "../../CrosswordComponents/HUD";
import Clues from "../../CrosswordComponents/Clues";
import axios from "axios";

export const Crossword = () => {
  const [crossword, setCrossword] = useState([
    //THIS IS THE DEFAULT CROSSWORD WHEN THE WEBSITE LOADS
    {
      vertical: true,
      initialHorizontal: 0,
      initialVertical: 0,
      answer: "here",
      clue: "The answer is here",
      complete: false,
      number: 1,
    },
    {
      vertical: false,
      initialHorizontal: 0,
      initialVertical: 3,
      answer: "example",
      clue: "The answer is example",
      complete: false,
      number: 2,
    },
    {
      vertical: false,
      initialHorizontal: 0,
      initialVertical: 5,
      answer: "crossword",
      clue: "The answer is crossword",
      complete: false,
      number: 3,
    },
  ]);
  const [horizontalSize, setHorizontalSize] = useState(9);
  const [verticalSize, setVerticalSize] = useState(9);
  const [hasBeenWon, setWin] = useState(false);

  const [startTime, setStartTime] = useState(Date.now());
  const [stopTime, setStopTime] = useState(Date.now());

  const newCrossword = (newCrossword, difficulty = "Easy") => {
    if (newCrossword) {
      let parsedArray = newCrossword.map((clue) => {
        return {
          answer: clue.Answer.toLowerCase(),
          vertical: clue.Vertical,
          complete: false,
          //The next 2 lines fix mis-named variables in the crossword generator
          initialHorizontal: clue.initVerticalCoord,
          initialVertical: clue.initHorizontalCoord,
          clue: clue.Clue,
        };
      });
      parsedArray = parsedArray.sort((a, b) => {
        if (a.initialVertical !== b.initialVertical) {
          return a.initialVertical - b.initialVertical;
        }
        return a.initialHorizontal - b.initialHorizontal;
      });
      let previousH = -1;
      let previousV = -1;
      let j = 0;
      for (let i = 0; i < parsedArray.length; i++) {
        if (
          parsedArray[i].initialHorizontal !== previousH ||
          parsedArray[i].initialVertical !== previousV
        ) {
          parsedArray[i] = { number: j + 1, ...parsedArray[i] };
          j = j + 1;
          previousH = parsedArray[i].initialHorizontal;
          previousV = parsedArray[i].initialVertical;
        } else {
          parsedArray[i] = { number: j, ...parsedArray[i] };
        }
      }

      setCrossword(parsedArray);
    }

    setHorizontalSize(
      difficulty === "Easy" ? 5 : difficulty === "Medium" ? 7 : 10
    );

    setVerticalSize(
      difficulty === "Easy" ? 5 : difficulty === "Medium" ? 7 : 10
    );

    setWin(false);

    setStartTime(Date.now);
  };

  const makeGuess = (clueNumber, vertical, guess) => {
    let clueToCheck = crossword.filter(
      (clue) =>
        clue.vertical === vertical &&
        clue.number === clueNumber &&
        !clue.complete
    );
    if (clueToCheck.length !== 1) return false;
    clueToCheck = clueToCheck[0];
    if (clueToCheck.answer !== guess.toLowerCase()) return false;
    setCrossword(
      crossword.map((clue) => {
        if (
          clue.vertical === vertical &&
          clue.number === clueNumber &&
          !clue.complete &&
          clueToCheck.answer === guess.toLowerCase()
        ) {
          return { ...clue, complete: true };
        }
        return clue;
      })
    );
    detectWin();
    return true;
  };

  const detectWin = () => {
    if (crossword.filter((word) => !word.complete).length !== 0) {
      return false;
    }
    setStopTime(Date.now());
    setWin(true);
    return true;
  };

  const requestCrossword = (difficulty) => {
    //passing by payload
    //same api endpoint for all difficulties, difficulty provided in the request payload
    axios
      .get(
        `http://localhost:8000/api/difficulty/?difficulty=${difficulty}&timestamp=${new Date().getTime()}`,
        {
          data: { difficulty: difficulty },
        }
      )
      .then((res) => newCrossword(res.data, difficulty));
    //different urls
    //3 api endpoints
    //axios
    //.get(`http://localhost:8000/api/difficulty${difficulty}`)
    //.then((res) => newCrossword(res));
    //encoded as a variable in the url
    //same api enpoint for all difficulties, difficulty provided as a variable to the django request handler
    //axios
    //.get(`http://localhost:8000/api/difficulty?difficulty=${difficulty}`)
    //.then((res) => newCrossword(res));
  };

  return (
    <div className="Crossword">
      <Header />
      <div className="CrosswordGame">
        <HUD
          hasBeenWon={hasBeenWon}
          makeGuess={makeGuess}
          requestCrossword={requestCrossword}
        />
        <Display
          crossword={crossword}
          horzSize={horizontalSize}
          vertSize={verticalSize}
        />
        <Clues crossword={crossword} />
      </div>
    </div>
  );
};

export default Crossword;
