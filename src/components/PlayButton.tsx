import PlayIcon from '../assets/PlayIcon';
import PauseIcon from '../assets/PauseIcon';
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
      <div className="relative group">
        <button
          className="w-12 h-12 flex justify-center items-center bg-white rounded-full hover:bg-slate-100 transform transition-transform duration-200 hover:scale-110"
          onClick={togglePlay}
        >
          {playing ? <PauseIcon /> : <PlayIcon />}
        </button>

        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          {playing ? 'Pause' : 'Play'}
        </span>
      </div>
    </>
  );
}

export default PlayButton;
