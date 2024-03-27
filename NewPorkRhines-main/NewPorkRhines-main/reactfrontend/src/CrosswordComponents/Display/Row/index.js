import "./index.scss";
import Square from "../Square";

export const Row = ({ inputArray }) => {
  return (
    <div className="CrosswordRow">
      {inputArray.map((element, index) => {
        return <Square inputArray={element} key={"Square" + index} />;
      })}
    </div>
  );
};

export default Row;
