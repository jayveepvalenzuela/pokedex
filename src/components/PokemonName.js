export default function PokemonName({ element: Element, classes = '', name }) {
  return <Element className={classes}>{name}</Element>;
}
