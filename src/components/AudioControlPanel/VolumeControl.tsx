import { useEffect, useState } from 'react';
import { audioController } from '../../services/audioController';

function VolumeControl() {
  const [volume, setVolume] = useState(1);

  // dependancy for setVolume here

  useEffect(() => {
    const trySetVolume = () => {
      const audio = audioController.getAudioElement();
      if (!audio) {
        setTimeout(trySetVolume, 200);
        return;
      }
      setVolume(audio.volume);
    };

    trySetVolume();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioController.setVolume(newVolume);
  };

  return (
    <>
      <div className="flex flex-col items-center mt-3">
        <input
          type="range"
          aria-label="Volume"
          min="0"
          max="2"
          step="0.01"
          value={volume}
          onChange={handleChange}
          className="cursor-pointer accent-blue-500 w-24 sm:w-32"
        />
        <span className="text-xs text-white mt-1 ">Volume</span>
      </div>
    </>
  );
}

export default VolumeControl;
