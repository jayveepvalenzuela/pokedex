import axios from 'axios';

async function getAllPokemon() {
  const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(async response => {
    const promises = response.data.results.map(result => {
      return axios.get(result.url);
    });

    const response_1 = await Promise.all(promises);
    return response_1;
  });

  return allPokemon;
}

async function getPokemonProfile(id) {
  return Promise.all([
    getPokemon(id),
    getPokemonSpecies(id)
  ]).then(results => {
    return results
  });
}

function getPokemon(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

function getPokemonSpecies(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
}

export { getAllPokemon, getPokemonProfile };
