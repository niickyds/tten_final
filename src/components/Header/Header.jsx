import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <Link className="header__button">
          <img to="/" className="header__logo-image" src={logo} />
        </Link>
        <h1>Pokemon Team Creator</h1>
      </div>
      <div className="header__search">
        <input
          className="header__search-input"
          placeholder="Search for a Pokemon"
          id="pokemonName"
        />
      </div>
    </header>
  );
}

export default Header;
