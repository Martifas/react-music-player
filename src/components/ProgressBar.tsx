import { useEffect, useRef, useState } from 'react';
import { audioController } from '../audioController';

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const audio = audioController.getAudioElement();
    if (!audio) return;

    const update = () => {
      setCurrentTime(audio.currentTime);
      setDuration(audio.duration || 0);
      setProgress((audio.currentTime / audio.duration) * 100 || 0);
    };

    intervalRef.current = window.setInterval(update, 500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioController.getAudioElement();
    if (!audio || !duration) return;

    const value = Number(e.target.value);
    audio.currentTime = (value / 100) * duration;
  };

  return (
    <div className="w-full px-4">
      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
        className="w-full h-2 accent-blue-500 rounded cursor-pointer"
      />
      <div className="flex justify-between text-sm text-white mt-1 px-1">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
}

function formatTime(seconds: number): string {
  if (isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

export default ProgressBar;
