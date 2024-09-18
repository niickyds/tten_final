import { Link } from "react-router-dom";
import Header from "../Header/Header";
import logo from "../../assets/logo.png";

import "./InfoPage.css";

function InfoPage() {
  return (
    <div>
      <Header />
      <div className="info">
        <div className="card">
          <img className="card__image" src={logo} />
          <div className="card__info">
            <div className="card__info_title">
              <h2>Name</h2>
              <div>Treecko</div>
            </div>
            <div className="card__info_title">
              <h2>Type</h2>
              <div>Grass</div>
            </div>
            <div className="card__info_title">
              <h2>Species</h2>
              <div>Lizard Pokemon</div>
            </div>
            <div className="card__info_title">
              <h2>Stats</h2>
              <div className="card__stats">
                <div>
                  HP<div>10</div>
                </div>
                <div>
                  Attack<div>10</div>
                </div>
                <div>
                  Defense<div>10</div>
                </div>
                <div>
                  Sp. Atk<div>10</div>
                </div>
                <div>
                  Sp. Def<div>10</div>
                </div>
                <div>
                  Speed<div>10</div>
                </div>
                <div>
                  Overall<div>10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1>
        <Link to="/">Home</Link>
      </h1>
    </div>
  );
}

export default InfoPage;
