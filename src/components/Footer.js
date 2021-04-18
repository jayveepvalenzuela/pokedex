export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="p-12 text-center">
      <small className="text-xs text-gray-400">Pokémon © 2002-{currentYear} Pokémon. © 1995-{currentYear} Nintendo/Creatures Inc./GAME FREAK inc. TM, ® and Pokémon character names are trademarks of Nintendo.</small>
    </footer>
  );
}
