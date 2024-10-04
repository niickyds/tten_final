import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <Link to="/">Home</Link>
        <Link to="/info">Search</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default Footer;
