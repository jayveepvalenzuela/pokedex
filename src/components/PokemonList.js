import { useState, useEffect } from 'react';
import PokemonCard from './PokemonCard';
import * as pokemonAPI from '../data/pokemon';

function PokemonList() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    pokemonAPI.getAllPokemon().then(obj => {
      setPokemonList(obj.data.results);
    });
  }, []);

  return (
    <div className='container mx-auto mb-8 px-5'>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {pokemonList.map((pokemon, i) => <PokemonCard key={i} name={pokemon.name} id={i + 1} />)}
      </div>
    </div>
  )
}

export default PokemonList;
