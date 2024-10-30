import { Link } from "react-router-dom";
import { useState, setState } from "react";
import React from "react";

import logo from "../../assets/logo.png";
import "./SearchHeader.css";

function SearchHeader(props) {
  const [search, setSearch] = useState("");

  function handleSubmit(evt) {
    try {
      evt.preventDefault();
      props.getPokemon(search);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/" className="header__button">
          <img className="header__logo-image" src={logo} alt="logo" />
        </Link>
        <h1 className="header__logo_text">Search for a Pokemon!</h1>
      </div>
      <div className="header__search">
        <form className="header__form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={this}
            className="header__search-input"
            placeholder="Charizard"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit" className="header__search-button">
            Search
          </button>
        </form>
      </div>
    </header>
  );
}

export default SearchHeader;
