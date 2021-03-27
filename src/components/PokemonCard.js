import { useContext, useState } from 'react';
import { Context } from '../store/store';
import * as pokemonAPI from '../data/pokemon';
import { addPadding } from '../helpers';
import Loader from './Loader';

function PokemonCard({ name, id }) {
  const [state, dispatch] = useContext(Context);
  const [loadingData, setLoadingData] = useState(false);

  function showPokemonModal(id) {
    setLoadingData(true);

    pokemonAPI.getPokemonProfile(id).then(obj => {
      const pokemonData = obj[0].data;
      const pokemonSpecies = obj[1].data;

      dispatch({ type: 'SET_POKEMON_PROFILE', payload: { ...pokemonData, ...pokemonSpecies } });
      dispatch({ type: 'SET_MODAL', payload: true });
      setLoadingData(false);
    });
  }

  return (
    <div
      className='relative transform-gpu shadow rounded p-6 text-center cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50'
      onClick={() => showPokemonModal(id)}>
      <div className='absolute top-3 right-6 text-gray-300 font-bold'>{`#${addPadding(id)}`}</div>
      {
        loadingData ?
          <Loader /> :
          <img className='w-3/4 mx-auto' src={`/pokemon/${id}.webp`} alt='' />
      }
      <h2 className='text-xl font-bold capitalize text-gray-700'>{name}</h2>
    </div>
  );
}

export default PokemonCard;
