import { Link } from "react-router-dom";
import { useState } from "react";

// import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";
import "./InfoPage.css";
import { fetchPokemon } from "../../utils/PokeApi";

function InfoPage() {
  const [loading, setLoading] = useState(false);
  const [pokeInfo, setPokeInfo] = useState();
  // const [pokemon, setPokemon] = useState();

  // const pokeInfo = Header().pokeInfo;

  return (
    <div>
      <header className="header">
        <div className="header__logo">
          <Link to="/" className="header__button">
            <img className="header__logo-image" src={logo} />
          </Link>
          <h1>Search for a Pokemon!</h1>
        </div>
        <div className="header__search">
          <input
            type="text"
            className="header__search-input"
            placeholder="ex. Charizard"
            id="pokemonName"
            // onKeyDown={handleEnter()}
          />
          <button className="header__search-button" onClick={fetchPokemon}>
            Search
          </button>
        </div>
      </header>
      <div className="info">
        {/* {!loading && pokeInfo ? <div className="works">works</div> : null} */}
        <div className="card">
          <img className="card__image" src="" id="pokeSprite" />
          <div className="card__info">
            <div className="card__info_title">
              <h2>Name</h2>
              <div id="pokeName"></div>
            </div>
            <div className="card__info_title">
              <h2>Type</h2>
              <div id="pokeType"></div>
            </div>
            <div className="card__info_title">
              <h2>Id</h2>
              <div id="pokeId">#</div>
            </div>
            <div className="card__info_title">
              <h2>Stats</h2>
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

// img: "",
// name: "",
// type: "",
// id: "",
// hp: "",
// attack: "",
// defense: "",
// spatk: "",
// spdef: "",
// speed: "",
// overall: "",
