import { useContext } from 'react';
import { Context } from '../store/store';

function PokemonModal() {
  const [state, dispatch] = useContext(Context);

  function hide() {
    dispatch({ type: 'SET_MODAL', payload: false });
  }

  return (
    <div className='flex fixed justify-center items-center inset-0 z-10 p-6 bg-white bg-opacity-75' style={{
      display: state.modal ? 'flex' : 'none'
    }}>
      <div className='container h-full lg:h-2/3 rounded shadow-xl overflow-hidden bg-white'>
        <div className='flex justify-end p-6 bg-red-600 text-white'>
          <button type='button' onClick={hide}>✕</button>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 p-6'>
          <div>
            <img className='w-3/4 mx-auto' src={`/pokemon/1.webp`} alt='' />
          </div>
          <div className='col-span-2 text-gray-700'>
            <h3 className='mb-3 text-xl md:text-3xl text-center lg:text-left font-bold capitalize'>
              Bulbasaur
              <span className='ml-4 text-gray-300'>#1</span>
            </h3>
            <ul className='mb-3 text-center lg:text-left'>
              <li className='inline rounded mr-2 px-2 py-1 bg-gray-500 text-white text-xs'>grass</li>
              <li className='inline rounded mr-2 px-2 py-1 bg-gray-500 text-white text-xs'>grass</li>
            </ul>
            <div className='mb-2 text-center lg:text-left'>
              <div className='inline-block mr-3'><strong>Height:</strong> 0.7m</div>
              <div className='inline-block mr-3'><strong>Weight:</strong> 6.9kg</div>
            </div>
            <p className='text-gray-500'>For some time after its birth, it grows by gaining nourishment from the seed on its back.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonModal;
