import React from "react";
import { useState } from "react";

import SearchHeader from "../SearchHeader/SearchHeader";
import PokemonData from "../PokemonData/PokemonData";
import Footer from "../Footer/Footer";
import { fetchPokemon } from "../../utils/FetchPokemon";

function InfoPage() {
  const [pokeInfo, setPokeInfo] = useState();
  const [loading, setLoading] = useState(false);

  const getPokemon = async (query) => {
    setLoading(true);
    const response = await fetchPokemon(query);
    const results = await response.json();
    console.log(results);
    setPokeInfo(results);
    setLoading(false);
  };

  return (
    <div>
      <SearchHeader getPokemon={getPokemon} />
      {!loading && pokeInfo ? (
        <PokemonData
          sprite={pokeInfo.sprites.front_default}
          name={pokeInfo.name}
          type={pokeInfo.types}
          id={pokeInfo.id}
          stats={pokeInfo.stats}
        />
      ) : null}
      <Footer />
    </div>
  );
}

export default InfoPage;
