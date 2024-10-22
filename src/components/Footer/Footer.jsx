import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <Link to="/" className="footer__button">
          Home
        </Link>
        <Link to="/info" className="footer__button">
          Search
        </Link>
        <Link to="/about" className="footer__button">
          About
        </Link>
      </div>
    </div>
  );
}

export default Footer;
