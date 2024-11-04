const baseUrl = "https://pokeapi.co/api/v2/";
const query = {
  // query for possible future updates (abilities, etc.)
  pokemon: "pokemon",
};

export async function fetchPokemon(pokemon) {
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`);
}
