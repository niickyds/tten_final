import "./TeamContent.css";
import logo from "../../assets/logo.png";

function TeamContent() {
  return (
    <div className="landing">
      <div className="landing__team-section">
        <div className="landing__team-title">My Team</div>
        <div className="landing__team">
          <div className="landing__card">
            <img className="landing__card-image" src={logo} /> Treeko
          </div>
          <div className="landing__card">
            <img className="landing__card-image" src={logo} /> Treeko
          </div>
          <div className="landing__card">
            <img className="landing__card-image" src={logo} /> Treeko
          </div>
          <div className="landing__card">
            <img className="landing__card-image" src={logo} /> Treeko
          </div>
          <div className="landing__card">
            <img className="landing__card-image" src={logo} />
            <div>Treeko</div>
          </div>
          <div className="landing__card">
            <img className="landing__card-image" src={logo} /> Treeko
          </div>
          <div className="landing__card">
            <img className="landing__card-image" src={logo} /> Treeko
          </div>
        </div>
      </div>

      <div className="landing__pokedex_holder">
        <button className="pokedex_button">pokedex</button>
      </div>
      <div>
        <button className="pokedex_button">random pokemon button</button>
      </div>
    </div>
  );
}

export default TeamContent;
