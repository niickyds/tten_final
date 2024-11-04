import React from "react";
import "./PokemonData.css";

function PokemonData(props) {
  return (
    <div className="info">
      <div className="card">
        <img className="card__image" src={props.sprite} />
        <div className="card__info">
          <div className="card__info_title">
            <h2 className="card__info_name">Name</h2>
            <div className="card__info_value">{props.name}</div>
          </div>
          <div className="card__info_title">
            <h2 className="card__info_name">Type</h2>
            <div className="card__info_value">
              {props.type.map((type, key) => (
                <div key={key}>
                  <span>{type.type.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="card__info_title">
            <h2 className="card__info_name">Id</h2>
            <div className="card__info_value"># {props.id}</div>
          </div>
          <div className="card__info_title">
            <h2 className="card__info_name">Stats</h2>
            <div className="card__info_stats">
              {props.stats.map((stat, key) => (
                <div className="card__stat" key={key}>
                  <div className="card__stats_name">
                    {stat.stat.name}

                    <div>{stat.base_stat}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonData;
