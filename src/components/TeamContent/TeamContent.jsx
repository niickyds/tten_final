import { Link } from "react-router-dom";
import "./TeamContent.css";
import logo from "../../assets/logo.png";

function TeamContent() {
  return (
    <div className="landing">
      <div className="landing__info">
        <h3 className="landing__title">Pokemon Final</h3>
        <Link to="/">
          <img className="landing__logo" src={logo} />
        </Link>
        <div className="landing__directions">
          Click one of the buttons below
        </div>
      </div>
      <div className="landing__buttons">
        <Link to="/info" className="landing__button">
          Search
        </Link>
        <Link to="/about" className="landing__button">
          About
        </Link>
      </div>
    </div>
  );
}

export default TeamContent;

// <div className="landing">
//   <div className="landing__team-section">
//     <div className="landing__team-title">
//       My Team <br />
//       (search for a pokemon, then add it from recently viewed)
//     </div>
//     <div className="landing__team">
//       <div className="landing__card">
//         <div className="card__button-holder">
//           <button className="card__button_remove">-</button>
//           <button className="card__button_add">+</button>
//         </div>
//         <img className="landing__card-image" src={logo} />
//         <div className="landing__card-text">Treeko</div>
//       </div>
//       <div className="landing__card">
//         <div className="card__button-holder">
//           <button className="card__button_remove">-</button>
//           <button className="card__button_add">+</button>
//         </div>
//         <img className="landing__card-image" src={logo} />
//         <div className="landing__card-text">Treeko</div>
//       </div>
//       <div className="landing__card">
//         <div className="card__button-holder">
//           <button className="card__button_remove">-</button>
//           <button className="card__button_add">+</button>
//         </div>
//         <img className="landing__card-image" src={logo} />
//         <div className="landing__card-text">Treeko</div>
//       </div>
//       <div className="landing__card">
//         <div className="card__button-holder">
//           <button className="card__button_remove">-</button>
//           <button className="card__button_add">+</button>
//         </div>
//         <img className="landing__card-image" src={logo} />
//         <div className="landing__card-text">Treeko</div>
//       </div>
//       <div className="landing__card">
//         <div className="card__button-holder">
//           <button className="card__button_remove">-</button>
//           <button className="card__button_add">+</button>
//         </div>
//         <img className="landing__card-image" src={logo} />
//         <div className="landing__card-text">Treeko</div>
//       </div>
//       <div className="landing__card">
//         <div className="card__button-holder">
//           <button className="card__button_remove">-</button>
//           <button className="card__button_add">+</button>
//         </div>
//         <img className="landing__card-image" src={logo} />
//         <div className="landing__card-text">Treeko</div>
//       </div>
//     </div>
//   </div>

//   <div className="landing__pokedex">
//     <button className="landing__button">
//       <a href="https://pokemondb.net/pokedex/all" target="_blank">
//         Pokedex
//       </a>
//     </button>
//   </div>
//   <div className="landing__random">
//     <button className="landing__button">random pokemon button</button>
//   </div>
// </div>
