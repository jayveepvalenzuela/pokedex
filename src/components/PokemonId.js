import { addPadding } from '../helpers';

export default function PokemonId({ classes = '', id }) {
  return <div className={classes}>{`#${addPadding(id)}`}</div>
}
