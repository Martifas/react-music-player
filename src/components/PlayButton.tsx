import PlayIcon from '../assets/PlayIcon.svg';
import PreviousIcon from '../assets/PreviousIcon.svg';
import NextIcon from '../assets/NextIcon.svg';
import playFunk from '../play';

function PlayButton() {
  return (
    <div className="flex gap-3 m-3">
      <button className="w-10 h-10" onClick={() => playFunk()}>
        <img
          className="w-full h-full cursor-pointer"
          src={PreviousIcon}
          alt="Previous"
        />
      </button>
      <button className="w-10 h-10">
        <img
          className="w-full h-full cursor-pointer"
          src={PlayIcon}
          alt="Play"
        />
      </button>
      <button className="w-10 h-10">
        <img
          className="w-full h-full cursor-pointer"
          src={NextIcon}
          alt="Next"
        />
      </button>
    </div>
  );
}

export default PlayButton;
