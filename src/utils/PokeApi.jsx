export const baseUrl = "https://pokeapi.co/api/v2/pokemon";

const query = {
  pokemon: "pokemon",
};

export async function fetchPokemon() {
  try {
    const pokemonName = document
      .getElementById("pokemonName")
      .value.toLowerCase();
    const response = await fetch(`${baseUrl}/${pokemonName}`);

    if (!response.ok) {
      throw new Error("Could not find resource");
    }

    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
