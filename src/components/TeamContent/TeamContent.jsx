import "./TeamContent.css";
import logo from "../../assets/logo.png";

function TeamContent() {
  return (
    <div className="landing">
      <div className="landing__team-section">
        <div className="landing__team-title">
          My Team <br />
          (search for a pokemon, then add it from recently viewed)
        </div>
        <div className="landing__team">
          <div className="landing__card">
            <div className="card__button-holder">
              <button className="card__button_add">-</button>
              <button className="card__button_remove">+</button>
            </div>
            <img className="landing__card-image" src={logo} />
            <div className="landing__card-text">Treeko</div>
          </div>
          <div className="landing__card">
            <div className="card__button-holder">
              <button className="team__add">-</button>
              <button className="team__remove">+</button>
            </div>
            <img className="landing__card-image" src={logo} />
            <div className="landing__card-text">Treeko</div>
          </div>
          <div className="landing__card">
            <div className="card__button-holder">
              <button className="team__add">-</button>
              <button className="team__remove">+</button>
            </div>
            <img className="landing__card-image" src={logo} />
            <div className="landing__card-text">Treeko</div>
          </div>
          <div className="landing__card">
            <div className="card__button-holder">
              <button className="team__add">-</button>
              <button className="team__remove">+</button>
            </div>
            <img className="landing__card-image" src={logo} />
            <div className="landing__card-text">Treeko</div>
          </div>
          <div className="landing__card">
            <div className="card__button-holder">
              <button className="team__add">-</button>
              <button className="team__remove">+</button>
            </div>
            <img className="landing__card-image" src={logo} />
            <div className="landing__card-text">Treeko</div>
          </div>
          <div className="landing__card">
            <div className="card__button-holder">
              <button className="team__add">-</button>
              <button className="team__remove">+</button>
            </div>
            <img className="landing__card-image" src={logo} />
            <div className="landing__card-text">Treeko</div>
          </div>
        </div>
      </div>

      <div className="landing__pokedex">
        <button className="landing__button">pokedex</button>
      </div>
      <div className="landing__random">
        <button className="landing__button">random pokemon button</button>
      </div>
    </div>
  );
}

export default TeamContent;
