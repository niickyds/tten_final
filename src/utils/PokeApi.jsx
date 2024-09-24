export const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export const processServerResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Error: ${res.status}`);
};

// const pokemonName = document.getElementById("pokemonName").value;
