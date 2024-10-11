import { Link } from "react-router-dom";
import { useState } from "react";
import { baseUrl } from "../../../../se_project_react/src/utils/api";
import { fetchPokemon } from "../../utils/PokeApi";
import logo from "../../assets/logo.png";
import "./Header.css";

function Header(props) {
  const [loading, setLoading] = useState([]);
  // const [pokemonName, setPokemonName] = useState();
  // const [search, setSearch] = useState("");
  const [pokeInfo, setPokeInfo] = useState({
    img: "",
    name: "",
    type: "",
    id: "",
    hp: "",
    attack: "",
    defense: "",
    spatk: "",
    spdef: "",
    speed: "",
    overall: "",
  });

  const calculateOverall = () => {
    return hp + attack + defense + spatk + spdef + speed;
  };

  // const searchPokemon = async (query) => {
  //   const res = await fetchPokemon(query);
  //   console.log(res);
  // return (
  //   fetch(`${baseUrl}/${pokemonName}`)
  //     // .then((res) => res.json)
  //     .then((res) => {
  //       res.json;
  //       console.log(res);
  //       setPokeInfo({
  //         img: res.sprites.front_default,
  //         name: res.name,
  //         type: res.types[0].type.name,
  //         id: res.id,
  //         hp: res.stats[0].base_stat,
  //         attack: res.stats[1].base_stat,
  //         defense: res.stats[2].base_stat,
  //         spatk: res.stats[3].base_stat,
  //         spdef: res.stats[4].base_stat,
  //         speed: res.stats[5].base_stat,
  //         overall: calculateOverall(),
  //       });
  //     })
  // );
  // };

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
  );
}

export default Header;
