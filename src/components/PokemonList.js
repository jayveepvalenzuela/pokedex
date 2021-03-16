import PokemonCard from './PokemonCard';

function PokemonList() {
  return (
    <div className='container mx-auto px-5'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <PokemonCard />
      </div>
    </div>
  );
}

export default PokemonList;
