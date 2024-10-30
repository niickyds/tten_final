const baseUrl = "https://pokeapi.co/api/v2/";
const query = {
  // query for possible future updates (abilities, etc.)
  pokemon: "pokemon",
};

export async function fetchPokemon(pokemon) {
  try {
    return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`);
  } catch (err) {
    console.error(err);
  }
}
