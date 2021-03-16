function PokemonCard() {
  return (
    <div className='relative transform-gpu hover:-translate-y-1 shadow hover:shadow-lg rounded p-6 text-center cursor-pointer transition duration-300 ease-in-out'>
      <div className='absolute top-3 right-6 text-sm text-gray-300'>#083</div>
      <img className='block mx-auto' src='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/083.png' alt=''/>
      <h2 className='mb-2 text-xl font-bold'>Farfetch'd</h2>
      <ul>
        <li className='inline rounded p-1 text-xs'>
          <span className='rounded px-2 py-1 bg-gray-300'>Normal</span>
        </li>
        <li className='inline rounded p-1 text-xs'>
          <span className='rounded px-2 py-1 bg-gray-300'>Flying</span>
        </li>
      </ul>
    </div>
  );
}

export default PokemonCard;
