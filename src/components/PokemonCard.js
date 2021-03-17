function PokemonCard(props) {
  return (
    <div className='relative transform-gpu shadow rounded p-6 text-center cursor-pointer transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-gray-50'>
      <div className='absolute top-3 right-6 text-sm text-gray-300'>{`#${props.index}`}</div>
      <img className='block w-3/4 mx-auto' src={`https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/other/official-artwork/${props.index}.png?raw=true`} alt='' />
      <h2 className='text-xl font-bold capitalize text-gray-700'>{props.name}</h2>
    </div>
  );
}

export default PokemonCard;
