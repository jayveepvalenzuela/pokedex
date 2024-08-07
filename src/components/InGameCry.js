import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeUp, faVolumeOff } from '@fortawesome/free-solid-svg-icons';
import { Howl, Howler } from 'howler';

Howler.autoSuspend = false;
Howler.volume(0.5);

export default function InGameCry({ id }) {
  const [playing, setPlaying] = useState(false);

  function playPokemonCry(id) {
    const sound = new Howl({
      src: require(`../assets/cries/${id}.ogg`),
      onload: () => {
        setPlaying(true);
      },
      onend: () => {
        setPlaying(false);
      }
    });

    sound.play();
  }

  return (
    <button
      type="button"
      className="text-xl text-gray-400 hover:text-gray-700 transition duration-100 ease-in-out px-3 focus:outline-none"
      onClick={() => playPokemonCry(id)}
      title="Play in-game cry"
    >
      <FontAwesomeIcon icon={playing ? faVolumeUp : faVolumeOff} />
    </button>
  );
}
