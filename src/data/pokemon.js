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
    throw new Error(err);
  }
}

async function getPokemonProfile(id) {
  try {
    const pokemonProfile = await Promise.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`)
    ]).then(results => results);

    return pokemonProfile;
  } catch (err) {
    throw new Error(err);
  }
}

export { getAllPokemon, getPokemonProfile };
