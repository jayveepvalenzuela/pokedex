export default function PokemonTypes({ types, classes = '' }) {
  return (
    <ul className={classes}>
      {types.map((typeData, i) => {
        return (
          <li key={i} className={`inline rounded mr-2 px-2 py-1 bg-gray-500 text-white text-xs bg-${typeData.type.name}`}>
            {typeData.type.name}
          </li>
        )
      })}
    </ul>
  );
}
