import imgPsyduck from '../assets/psy-confused.webp';

export default function EmptyMessage({ classes = '', message }) {
  return (
    <div className={classes}>
      <img className="mx-auto" src={imgPsyduck} alt="" width="160" />
      <p>{message}</p>
    </div>
  );
}
