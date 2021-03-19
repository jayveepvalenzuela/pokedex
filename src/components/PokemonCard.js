import { useContext } from 'react';
import { Context } from '../store/store';
import * as pokemonAPI from '../data/pokemon';

function PokemonCard({ name, id }) {
  const [state, dispatch] = useContext(Context);

  function showPokemonModal(id) {
    pokemonAPI.getPokemon(id).then(obj => {
      console.log(obj);
      if (!state.modal) {
        dispatch({ type: 'SET_MODAL', payload: true });
      }
    });
  }

  return (
    <div
      className='relative transform-gpu shadow rounded p-6 text-center cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50'
      onClick={() => showPokemonModal(id)}>
      <div className='absolute top-3 right-6 text-sm text-gray-300'>{`#${id}`}</div>
      <img className='w-3/4 mx-auto' src={`/pokemon/${id}.webp`} alt='' />
      <h2 className='text-xl font-bold capitalize text-gray-700'>{name}</h2>
    </div>
  );
}

export default PokemonCard;
