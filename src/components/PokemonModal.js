import { useContext } from 'react';
import { Context } from '../store/store';

function PokemonModal() {
  const [state, dispatch] = useContext(Context);
  const pokemonData = state.pokemonProfile;

  function hide() {
    dispatch({ type: 'SET_MODAL', payload: false });
  }

  function Image() {
    return <img className='w-3/4 mx-auto' src={`/pokemon/${pokemonData.id}.webp`} alt='' />;
  }

  function Name() {
    return (
      <h3 className='mb-3 text-xl md:text-3xl text-center lg:text-left font-bold capitalize'>
        {pokemonData.name}
        <span className='ml-4 text-gray-300'>{`#${pokemonData.id}`}</span>
      </h3>
    );
  }

  function Types() {
    return (
      <ul className='mb-3 text-center lg:text-left'>
        {pokemonData.types.map((typeData, i) => {
          return (
            <li key={i} className={`inline rounded mr-2 px-2 py-1 bg-gray-500 text-white text-xs bg-${typeData.type.name}`}>
              {typeData.type.name}
            </li>
          )
        })}
      </ul>
    );
  }

  function Stats() {
    return (
      <div className='mb-2 text-center lg:text-left'>
        <div className='inline-block mr-3'><strong>Height:</strong> {pokemonData.height / 10}m</div>
        <div className='inline-block mr-3'><strong>Weight:</strong> {pokemonData.weight / 10}kg</div>
      </div>
    );
  }

  function Description() {
    return <p className='text-gray-500'>{pokemonData.flavor_text_entries[0].flavor_text}</p>;
  }

  return (
    <div className={`flex fixed justify-center items-center inset-0 z-10 p-6 bg-white bg-opacity-75 transform-gpu transition duration-150 ${state.modal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none delay-300'}`}>
      <div className={`container h-full lg:h-auto rounded shadow-xl overflow-hidden bg-white transform-gpu transition duration-300 ease-in-out ${state.modal ? 'scale-100 opacity-100 delay-150' : 'scale-95 opacity-0'}`}>
        <div className='flex justify-end p-6 bg-red-600 text-white'>
          <button type='button' onClick={hide}>✕</button>
        </div>
        {Object.keys(pokemonData).length > 0 ? (
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-6'>
            <div>
              <Image />
            </div>
            <div className='col-span-2 text-gray-700'>
              <Name />
              <Types />
              <Stats />
              <Description />
            </div>
          </div>
        ) : (
          <div className='flex p-6 center text-gray-500'>
            <p>Pokémon data not found</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default PokemonModal;
