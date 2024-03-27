import "./index.scss";
import HeaderPhoto from "./CrosswordHeader.png";

export const Header = () => {
  return (
    <div className="CrosswordHeader">
      <img
        src={HeaderPhoto}
        alt={
          <>
            <p>New Pork Rhines</p>
            <p>Crossword</p>
          </>
        }
      />
    </div>
  );
};

export default Header;
