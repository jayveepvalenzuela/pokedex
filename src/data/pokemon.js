import axios from 'axios';

async function getAllPokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getPokemon(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

async function getPokemonSpecies(id) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getAllPokemon, getPokemon, getPokemonSpecies };
