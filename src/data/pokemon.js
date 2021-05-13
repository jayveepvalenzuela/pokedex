import axios from 'axios';

const URL = 'https://pokeapi.co/api/v2';

async function getAllPokemon() {
  try {
    const allPokemon = await axios.get(`${URL}/pokemon?limit=151`).then(response => {
      const promises = response.data.results.map(result => {
        return axios.get(result.url);
      });

      return Promise.all(promises);
    });

    return allPokemon;
  } catch (err) {
    throw new Error(err);
  }
}

async function getPokemonProfile(id) {
  try {
    const pokemonProfile = await Promise.all([
      axios.get(`${URL}/pokemon/${id}`),
      axios.get(`${URL}/pokemon-species/${id}`)
    ]).then(results => results);

    return pokemonProfile;
  } catch (err) {
    throw new Error(err);
  }
}

export { getAllPokemon, getPokemonProfile };
