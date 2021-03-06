import { useContext } from 'react';
import { Context } from '../store/store';
import { shorten } from '../helpers';
import PokemonThumbnail from './PokemonThumbnail';
import PokemonId from './PokemonId';
import EmptyMessage from './EmptyMessage';
import InGameCry from './InGameCry';
import PokemonName from './PokemonName';
import PokemonTypes from './PokemonTypes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faAdjust } from '@fortawesome/free-solid-svg-icons';

export default function PokemonModal() {
  const [state, dispatch] = useContext(Context);
  const {
    id,
    name,
    types,
    height,
    weight,
    stats,
    flavor_text_entries
  } = state.pokemonProfile;

  const Stats = () => {
    return (
      <div className="mb-2 text-center lg:text-left">
        <div className="inline-block mr-3"><strong>Height:</strong> {height / 10}m</div>
        <div className="inline-block mr-3"><strong>Weight:</strong> {weight / 10}kg</div>
      </div>
    );
  }

  const BaseStats = () => {
    return (
      <table className="table-fixed mx-auto mb-2 lg:mx-0" cellSpacing="2" cellPadding="2">
        <tbody>
          <tr>
            {stats.map((st, i) => {
              return (
                <td width="80" key={i}>
                  <div className="rounded py-2 bg-gray-50 text-center border-solid border-2 border-gray-100">
                    <div>{st.base_stat}</div>
                    <div className="text-xs font-bold whitespace-nowrap uppercase">{shorten(st.stat.name)}</div>
                  </div>
                </td>
              )
            })}
          </tr>
        </tbody>
      </table>
    );
  }

  const Description = () => <p className="text-gray-500">{flavor_text_entries.find(fte => fte.version.name === 'yellow').flavor_text}</p>;

  function hideModal() {
    dispatch({ type: 'SET_MODAL', payload: false });
  }

  const modalBackdrop = state.modal ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none delay-300';
  const modalContainer = state.modal ? 'translate-y-0 opacity-100 delay-150' : 'translate-y-6 opacity-0';
  const shadow = {
    backgroundColor: 'rgba(0,0,0,.1)',
    top: '72%',
    left: '15%',
    width: '70%',
    height: '20%',
    borderRadius: '50%',
    filter: 'blur(5px)'
  };

  return (
    <div className={`${modalBackdrop} flex fixed justify-center items-center inset-0 z-10 p-6 bg-white bg-opacity-75 transform-gpu transition duration-150`}>
      <div className={`${modalContainer} container h-full lg:h-auto rounded shadow-xl overflow-hidden bg-white transform-gpu transition duration-300 ease-in-out`}>
        <div className="flex justify-between p-6 bg-red-600 text-white">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faAdjust} className="transform -rotate-90 mr-2" />
            <PokemonId classes="font-bold text-lg" id={id} />
          </div>
          <button type="button" className="focus:outline-none" onClick={hideModal}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        {Object.keys(state.pokemonProfile).length > 0
          ? <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              <div className="relative">
                <PokemonThumbnail classes="w-3/4 mx-auto z-10 relative" id={id} />
                <div className="absolute" style={shadow}></div>
              </div>
              <div className="col-span-2 text-gray-700">
                <div className="flex justify-center md:justify-start mb-3">
                  <PokemonName element="h3" name={name} classes="inline-block text-xl md:text-3xl font-bold capitalize" />
                  <InGameCry id={id} />
                </div>
                <PokemonTypes types={types} classes="mb-2 text-center lg:text-left" />
                <Stats />
                <BaseStats />
                <Description />
              </div>
            </div>
          : <div className="flex p-6 justify-center">
              <EmptyMessage classes="text-gray-500" message="Pokémon data not found" />
            </div>
        }
      </div>
    </div>
  );
}
