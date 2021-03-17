import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
      .then(response => {
        setPokemonList(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='container mx-auto px-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {pokemonList.map((pokemon, i) => <PokemonCard key={i} name={pokemon.name} index={i + 1} />)}
      </div>
    </div>
  )
}

export default PokemonList;
