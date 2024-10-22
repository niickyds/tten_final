import { Link } from "react-router-dom";
import "./TeamContent.css";
import logo from "../../assets/logo.png";

function TeamContent() {
  return (
    <div className="landing">
      <div className="landing__info">
        <h3 className="landing__title">Pokemon Final</h3>
        <img className="landing__logo" src={logo} />
        <div className="landing__directions">
          Click one of the buttons below
        </div>
      </div>
      <div className="landing__buttons">
        <Link to="/info" className="landing__button">
          Search
        </Link>
        <Link to="/about" className="landing__button">
          About
        </Link>
      </div>
    </div>
  );
}

export default TeamContent;
