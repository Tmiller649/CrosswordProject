import "./index.scss";

export const Clues = ({ crossword }) => {
  return (
    <div className="CrosswordTimer">
      <h5>Across</h5>
      {crossword
        .filter((clue) => !clue.vertical)
        .map((clue, index) => {
          return (
            <p key={"ClueAcross" + index}>
              <b>{clue.number}: </b>
              {clue.clue}
            </p>
          );
        })}
      <h5>Down</h5>
      {crossword
        .filter((clue) => clue.vertical)
        .map((clue, index) => {
          return (
            <p key={"ClueDown" + index}>
              <b>{clue.number}: </b>
              {clue.clue}
            </p>
          );
        })}
    </div>
  );
};

export default Clues;
