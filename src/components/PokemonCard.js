import { useContext, useState } from 'react';
import { Context } from '../store/store';
import * as pokemonAPI from '../data/pokemon';

function PokemonCard({ name, id }) {
  const [state, dispatch] = useContext(Context);
  const [loadingData, setLoadingData] = useState(false);

  function showPokemonModal(id) {
    setLoadingData(true);

    pokemonAPI.getPokemon(id).then(obj => {
      const pokemonData = obj.data;

      pokemonAPI.getPokemonSpecies(id).then(obj => {
        const pokemonSpecies = obj.data;

        dispatch({ type: 'SET_POKEMON_PROFILE', payload: { ...pokemonData, ...pokemonSpecies } });
      }).then(() => {
        if (!state.modal) {
          dispatch({ type: 'SET_MODAL', payload: true });
          setLoadingData(false);
        }
      });
    });
  }

  return (
    <div
      className='relative transform-gpu shadow rounded p-6 text-center cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50'
      onClick={() => showPokemonModal(id)}>
      <div className='absolute top-3 right-6 text-sm text-gray-300'>{`#${id}`}</div>
      {
        loadingData ?
          <img className='w-3/4 mx-auto opacity-10 animate-spin invert' src='data:image/webp;base64,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' alt='' /> :
          <img className='w-3/4 mx-auto' src={`/pokemon/${id}.webp`} alt='' />
      }
      <h2 className='text-xl font-bold capitalize text-gray-700'>{name}</h2>
    </div>
  );
}

export default PokemonCard;
