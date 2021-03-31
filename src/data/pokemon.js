import axios from 'axios';

async function getAllPokemon() {
  try {
    const allPokemon = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151').then(response => {
      const promises = response.data.results.map(result => {
        return axios.get(result.url);
      });

      return Promise.all(promises);
    });

    return allPokemon;
  } catch (err) {
    return err;
  }
}

async function getPokemonProfile(id) {
  try {
    const pokemonProfile = await Promise.all([
      getPokemon(id),
      getPokemonSpecies(id)
    ]).then(results => results);

    return pokemonProfile;
  } catch (err) {
    return err;
  }
}

function getPokemon(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
}

function getPokemonSpecies(id) {
  return axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
}

export { getAllPokemon, getPokemonProfile };
