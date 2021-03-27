import axios from 'axios';

async function getAllPokemon() {
  const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(async response => {
    const promises = response.data.results.map(result => {
      return axios.get(result.url);
    });

    const allPokemonData = await Promise.all(promises);

    return allPokemonData;
  });

  return allPokemon;
}

async function getPokemonProfile(id) {
  const pokemonProfile = await Promise.all([
    getPokemon(id),
    getPokemonSpecies(id)
  ]).then(results => {
    return results
  });

  return pokemonProfile;
}

function getPokemon(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

function getPokemonSpecies(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
}

export { getAllPokemon, getPokemonProfile };
