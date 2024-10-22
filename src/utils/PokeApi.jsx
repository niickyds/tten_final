export const baseUrl = "https://pokeapi.co/api/v2/pokemon";

export async function fetchPokemon() {
  function arrangeTypes(data) {
    const typeHolder = document.getElementById("pokeType");
    const pokeTypes = data.types;
    if (pokeTypes[1]) {
      typeHolder.textContent =
        pokeTypes[0].type.name + " " + pokeTypes[1].type.name;
    } else {
      return (typeHolder.innerText = pokeTypes[0].type.name);
    }
  }

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

    const pokeSprite = data.sprites.front_default;
    const pokeName = data.name;
    const pokeType = arrangeTypes(data);
    const pokeId = data.id;
    const pokeHp = data.stats[0].base_stat;
    const pokeAtk = data.stats[1].base_stat;
    const pokeDef = data.stats[2].base_stat;
    const pokeSpatk = data.stats[3].base_stat;
    const pokeSpdef = data.stats[4].base_stat;
    const pokeSpd = data.stats[5].base_stat;

    const imgElement = document.getElementById("pokeSprite");
    const nameElement = document.getElementById("pokeName");
    const idElement = document.getElementById("pokeId");
    const hpElement = document.getElementById("pokeHp");
    const atkElement = document.getElementById("pokeAtk");
    const defElement = document.getElementById("pokeDef");
    const spatkElement = document.getElementById("pokeSpatk");
    const spdefElement = document.getElementById("pokeSpdef");
    const spdElement = document.getElementById("pokeSpd");

    imgElement.src = pokeSprite;
    nameElement.textContent = pokeName;
    pokeType;
    idElement.textContent = "# " + pokeId;
    hpElement.textContent = pokeHp;
    atkElement.textContent = pokeAtk;
    defElement.textContent = pokeDef;
    spatkElement.textContent = pokeSpatk;
    spdefElement.textContent = pokeSpdef;
    spdElement.textContent = pokeSpd;
  } catch (err) {
    console.error(err);
  }
}
