import "./Header.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-image" src={logo} />
        <h1>Pokemon Team Creator</h1>
      </div>
      <div className="header__search">
        <input className="header__search-input" placeholder="Search" />
      </div>
    </header>
  );
}

export default Header;
