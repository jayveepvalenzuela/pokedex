import { useContext } from 'react';
import { Context } from '../store/store';

export default function SearchBar() {
  const [state, dispatch] = useContext(Context);

  function searchPokemon(ev) {
    const char = ev.target.value.toLowerCase();
    const result = state.pokemonList.filter(pokemon => pokemon.data.name.includes(char));

    dispatch({ type: 'SET_SEARCH_RESULT', payload: result });
  }

  return (
    <form className="search w-40 lg:w-60">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
        <path fill="#ffffff" d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"/>
      </svg>
      <input
        className="w-full border-b py-1 pl-6 bg-transparent text-white focus:outline-none placeholder-white"
        type="search"
        placeholder="Search Pokémon"
        onInput={searchPokemon} />
    </form>
  );
}
