export const baseUrl = "https://pokeapi.co/api/v2";

const query = {
  pokemon: "pokemon",
};

export async function fetchPokemon(pokemon) {
  console.log(`${baseurl}/${query.pokemon}/${pokemon}`);
  return fetch(`${baseurl}/${query.pokemon}/${pokemon}`);
}

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};
