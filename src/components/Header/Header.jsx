import { Link } from "react-router-dom";
import "./Header.css";
import logo from "../../assets/logo.png";
import searchPokemon from "../../utils/PokeApi";

function Header({ searchPokemon }) {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__button">
          <img className="header__logo-image" src={logo} />
        </Link>
        <h1>Search for a Pokemon!</h1>
      </div>
      <div className="header__search">
        <input
          className="header__search-input"
          placeholder="ex. Charizard"
          id="pokemonName"
        />
      </div>
    </header>
  );
}

export default Header;
