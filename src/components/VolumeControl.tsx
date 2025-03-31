import { useState } from 'react';
import { audioController } from '../audioController';

function VolumeControl() {
  const [volume, setVolume] = useState(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
    audioController.setVolume(parseFloat(e.target.value));
  };

  return (
    <input
      type="range"
      min="0"
      max="2"
      step="0.01"
      value={volume}
      onChange={handleChange}
      className="cursor-pointer w-24 sm:w-32"
    />
  );
}

export default VolumeControl;
