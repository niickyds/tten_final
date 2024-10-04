import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import logo from "../../assets/logo.png";
import "./InfoPage.css";
import { fetchPokemon } from "../../utils/PokeApi";

function InfoPage() {
  const pokeInfo = Header();

  const getPokemon = async (query) => {
    const res = await fetchPokemon(query);
    console.log(res);
  };

  return (
    <div>
      <Header getPokemon={getPokemon} />
      <div className="info">
        <div className="card">
          <img className="card__image" src={logo} />
          <div className="card__info">
            <div className="card__info_title">
              <h2>Name</h2>
              <div>{pokeInfo.name}</div>
            </div>
            <div className="card__info_title">
              <h2>Type</h2>
              <div>{pokeInfo.type}</div>
            </div>
            <div className="card__info_title">
              <h2>Id</h2>
              <div>#{pokeInfo.id}</div>
            </div>
            <div className="card__info_title">
              <h2>Stats</h2>
              <div className="card__stats">
                <div className="card__stats_name">
                  HP
                  <div className="card__stats_number">{pokeInfo.hp}</div>
                </div>
                <div className="card__stats_name">
                  Attack
                  <div className="card__stats_number">{pokeInfo.attack}</div>
                </div>
                <div className="card__stats_name">
                  Defense
                  <div className="card__stats_number">{pokeInfo.defense}</div>
                </div>
                <div className="card__stats_name">
                  Sp. Atk
                  <div className="card__stats_number">{pokeInfo.spatk}</div>
                </div>
                <div className="card__stats_name">
                  Sp. Def
                  <div className="card__stats_number">{pokeInfo.spdef}</div>
                </div>
                <div className="card__stats_name">
                  Speed
                  <div className="card__stats_number">{pokeInfo.speed}</div>
                </div>
                <div className="card__stats_name">
                  Overall
                  <div className="card__stats_number">
                    {pokeInfo.calculateOverall}
                  </div>
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
