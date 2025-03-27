import PlayIcon from '../assets/PlayIcon.svg';
import PreviousIcon from '../assets/PreviousIcon.svg';
import NextIcon from '../assets/NextIcon.svg';
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
    <div className="flex gap-3 m-3">
      <button className="w-10 h-10">
        <img
          src={PreviousIcon}
          alt="Previous"
          className="w-full h-full cursor-pointer"
        />
      </button>
      <button className="w-10 h-10" onClick={togglePlay}>
        <img
          src={playing ? PauseIcon : PlayIcon}
          alt={playing ? 'Pause' : 'Play'}
          className="w-full h-full cursor-pointer"
        />
      </button>
      <button className="w-10 h-10">
        <img
          src={NextIcon}
          alt="Next"
          className="w-full h-full cursor-pointer"
        />
      </button>
    </div>
  );
}

export default PlayButton;
