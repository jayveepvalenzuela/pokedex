import axios from 'axios';

async function getAllPokemon() {
  try {
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');

    return response;
  } catch (error) {
    console.error(error);
  }
}

export { getAllPokemon };
