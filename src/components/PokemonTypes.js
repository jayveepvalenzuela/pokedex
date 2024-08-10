export default function PokemonTypes({ types, classes = '' }) {
  return (
    <ul className={classes}>
      {types.map((typeData, i) => {
        return (
          <li
            key={i}
            className={`inline rounded mr-2 px-2 py-1 text-white bg-${typeData.type.name} uppercase`}
            style={{ fontSize: '.7rem', letterSpacing: '.25px' }}
          >
            {typeData.type.name}
          </li>
        )
      })}
    </ul>
  );
}
