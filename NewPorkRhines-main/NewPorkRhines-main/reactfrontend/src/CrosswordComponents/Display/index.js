import "./index.scss";
import Row from "./Row";

export const Display = ({ crossword, horzSize, vertSize }) => {
  var parsedCrossword = [];
  for (let i = 0; i < vertSize; i++) {
    var emptyRow = [];
    for (let j = 0; j < horzSize; j++) {
      var emptyCell = ["", "", 0];
      emptyRow[j] = emptyCell;
    }

    parsedCrossword[i] = emptyRow;
  }
  crossword.forEach((clue) => {
    let h = clue.initialHorizontal;
    let v = clue.initialVertical;
    parsedCrossword[v][h][0] = clue.number;

    for (let i = 0; i < clue.answer.length; i++) {
      parsedCrossword[v][h][2] = 1;
      if (clue.complete) {
        parsedCrossword[v][h][1] = clue.answer[i];
      }
      if (clue.vertical) {
        v++;
      } else {
        h++;
      }
    }
  });

  return (
    <div className="CrosswordDisplay">
      {parsedCrossword.map((element, index) => {
        return <Row inputArray={element} key={"Row" + index} />;
      })}
    </div>
  );
};

export default Display;
