export default function PokemonThumbnail({ classes = '', id, alt = '' }) {
  return <img className={classes} src={require(`../assets/images/${id}.webp`).default} alt={alt} />;
}
