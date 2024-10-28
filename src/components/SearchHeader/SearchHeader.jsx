import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logo.png";
import "./SearchHeader.css";

function SearchHeader(props) {
  const [search, setSearch] = useState("");

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__button">
          <img className="header__logo-image" src={logo} alt="logo" />
        </Link>
        <h1 className="header__logo_text">Search for a Pokemon!</h1>
      </div>
      <div className="header__search">
        <form className="header__form">
          <input
            type="text"
            className="header__search-input"
            placeholder="ex. Charizard"
            id="pokemonName"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            className="header__search-button"
            onClick={(e) => props.getPokemon(search)}
          >
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchHeader;
