import { useContext, useState } from 'react';
import { Context } from '../store/store';
import * as pokemonAPI from '../data/pokemon';
import Loader from './Loader';
import PokemonThumbnail from './PokemonThumbnail';
import PokemonId from './PokemonId';
import PokemonName from './PokemonName';
import PokemonTypes from './PokemonTypes';

export default function PokemonCard({ data }) {
  const [state, dispatch] = useContext(Context);
  const [loadingData, setLoadingData] = useState(false);
  const { id, types, name } = data;

  function loadPokemonProfile(id) {
    setLoadingData(true);

    pokemonAPI.getPokemonProfile(id)
      .then(obj => {
        const pokemonData = obj[0].data;
        const pokemonSpecies = obj[1].data;

        dispatch({ type: 'SET_POKEMON_PROFILE', payload: { ...pokemonData, ...pokemonSpecies } });
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoadingData(false);
        dispatch({ type: 'SET_MODAL', payload: true });
      });
  }

  return (
    <div
      className="relative transform-gpu shadow rounded p-6 text-center cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50"
      onClick={() => loadPokemonProfile(id)}
    >
      <PokemonId classes="absolute top-3 right-6 text-gray-300 font-bold" id={id} />
      {loadingData
        ? <Loader />
        : <PokemonThumbnail classes="w-3/4 mx-auto" id={id} />
      }
      <PokemonName element="h2" name={name} classes="text-xl font-bold capitalize text-gray-700 mb-2" />
      <PokemonTypes types={types} />
    </div>
  );
}
