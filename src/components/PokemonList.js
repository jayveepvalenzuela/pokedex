import { useContext, useEffect, useState } from 'react';
import { Context } from '../store/store';
import PokemonCard from './PokemonCard';
import Loader from './Loader';
import EmptyMessage from './EmptyMessage';
import * as pokemonAPI from '../data/pokemon';

export default function PokemonList() {
  const [state, dispatch] = useContext(Context);
  const [loadingList, setLoadingList] = useState(true);
  const pokemonList = state.searchResult;

  useEffect(() => {
    pokemonAPI.getAllPokemon().then(allPokemon => {
      dispatch({ type: 'SET_POKEMON_LIST', payload: allPokemon });
      dispatch({ type: 'SET_SEARCH_RESULT', payload: allPokemon });
      setLoadingList(false);
    }).catch(err => console.log(err));
  }, [dispatch]);

  return (
    <div className="container mx-auto mb-8 px-5">
      {loadingList
        ? <div className="w-1/4 mx-auto">
            <Loader />
          </div>
        : pokemonList.length > 0
          ? <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {pokemonList.map(pokemon => <PokemonCard key={pokemon.data.id} name={pokemon.data.name} id={pokemon.data.id} />)}
            </div>
          : <EmptyMessage classes="text-gray-500" message="Pokémon not found" />
      }
    </div>
  )
}
