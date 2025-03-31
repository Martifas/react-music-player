import PlayIcon from '../assets/PlayIcon.svg';
import PauseIcon from '../assets/PauseIcon.svg';
import { audioController } from '../audioController';
import { useState } from 'react';

function PlayButton() {
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    if (playing) {
      audioController.pause();
    } else {
      audioController.play();
    }
    setPlaying(!playing);
  };

  return (
    <>
      <button className="w-10 h-10" onClick={togglePlay}>
        <img
          src={playing ? PauseIcon : PlayIcon}
          alt={playing ? 'Pause' : 'Play'}
          className="w-full h-full cursor-pointer"
        />
      </button>
    </>
  );
}

export default PlayButton;
