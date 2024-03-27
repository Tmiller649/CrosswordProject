import "./index.scss";

export const Square = ({ inputArray }) => {
  const clueNumber = inputArray[0] || "";
  const letter = inputArray[1] || "";
  const notGrayed = inputArray[2] || 0;
  if (notGrayed) {
    return (
      <div className="CrosswordSquare">
        <div className="Number">{clueNumber}</div>
        <div className="Letter">
          <p>{letter}</p>
        </div>
      </div>
    );
  }
  return <div className="CrosswordSquareGrayed"></div>;
};

export default Square;
