import { Link } from "react-router-dom";
import "./InfoPage.css";
import Header from "../Header/Header";

function InfoPage() {
  <Header />;
  <div className="info">
    <div className="card">
      <img className="card__image" />
      <div className="card__name"></div>
    </div>
    <h1>
      <Link to="/">Home</Link>
    </h1>
  </div>;
}

export default InfoPage;
