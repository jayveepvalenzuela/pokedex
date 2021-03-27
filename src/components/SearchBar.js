import { useContext } from 'react';
import { Context } from '../store/store';

function SearchBar() {
  const [state, dispatch] = useContext(Context);

  function searchPokemon(ev) {
    const result = state.pokemonList.filter(pokemon => pokemon.data.name.includes(ev.target.value));

    dispatch({ type: 'SET_SEARCH_RESULT', payload: result });
  }

  return (
    <form className='search lg:w-60'>
      <input
        className='w-full border-b py-1 pl-6 bg-transparent text-white focus:outline-none placeholder-white'
        type='search'
        placeholder='Search Pokémon'
        onInput={searchPokemon} />
    </form>
  );
}

export default SearchBar;
