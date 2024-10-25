import { Link } from "react-router-dom";
import React from "react";

import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";
import "./SearchPage.css";
import { fetchPokemon } from "../../utils/PokeApi";

function InfoPage() {
  function handleEnter(event) {
    if (event.key === "Enter" || event.keyCode === 13) {
      event.preventDefault();
      fetchPokemon();
    }
  }

  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <Link to="/" className="header__button">
            <img className="header__logo-image" src={logo} alt="logo" />
          </Link>
          <h1 className="header__logo_text">Search for a Pokemon!</h1>
        </div>
        <div className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder="ex. Charizard"
            id="pokemonName"
            onKeyDown={handleEnter}
          />
          <button className="header__search-button" onClick={fetchPokemon}>
            Search
          </button>
        </div>
      </header>
      <div className="info">
        <div className="card">
          <img className="card__image" src="" id="pokeSprite" />
          <div className="card__info">
            <div className="card__info_title">
              <h2 className="card__info_name">Name</h2>
              <div className="card__info_value" id="pokeName"></div>
            </div>
            <div className="card__info_title">
              <h2 className="card__info_name">Type</h2>
              <div className="card__info_value" id="pokeType"></div>
            </div>
            <div className="card__info_title">
              <h2 className="card__info_name">Id</h2>
              <div className="card__info_value" id="pokeId">
                #
              </div>
            </div>
            <div className="card__info_title">
              <h2 className="card__info_name">Stats</h2>
              <div className="card__stats">
                <div className="card__stats_name">
                  HP
                  <div className="card__stats_number" id="pokeHp"></div>
                </div>
                <div className="card__stats_name">
                  Attack
                  <div className="card__stats_number" id="pokeAtk"></div>
                </div>
                <div className="card__stats_name">
                  Defense
                  <div className="card__stats_number" id="pokeDef"></div>
                </div>
                <div className="card__stats_name">
                  Sp. Atk
                  <div className="card__stats_number" id="pokeSpatk"></div>
                </div>
                <div className="card__stats_name">
                  Sp. Def
                  <div className="card__stats_number" id="pokeSpdef"></div>
                </div>
                <div className="card__stats_name">
                  Speed
                  <div className="card__stats_number" id="pokeSpd"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default InfoPage;
