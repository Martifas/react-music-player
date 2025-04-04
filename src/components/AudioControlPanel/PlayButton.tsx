import { useAudioStore } from '../../stores/audioStore';
import PlayIcon from '../../assets/PlayIcon';
import PauseIcon from '../../assets/PauseIcon';
import { audioController } from '../../services/audioController';

function PlayButton() {
  const isPlaying = useAudioStore((state) => state.playing);

  const togglePlay = () => {
    if (isPlaying) {
      audioController.pause();
    } else {
      audioController.play();
    }
  };

  return (
    <div className="relative group">
      <button
        aria-label={isPlaying ? 'Pause' : 'Play'}
        className="w-10 h-10 cursor-pointer flex justify-center items-center bg-blue-500 rounded-full hover:bg-blue-700 transform transition-transform duration-200 hover:scale-110"
        onClick={togglePlay}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </button>

      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        {isPlaying ? 'Pause' : 'Play'}
      </span>
    </div>
  );
}

export default PlayButton;
