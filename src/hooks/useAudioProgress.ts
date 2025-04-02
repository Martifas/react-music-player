import { useEffect, useState } from 'react';
import { audioController } from '../services/audioController';

export function useAudioProgress() {
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    let interval: number;

    const checkAndStart = () => {
      const audio = audioController.getAudioElement();
      if (!audio) {
        setTimeout(checkAndStart, 200);
        return;
      }

      const update = () => {
        setCurrentTime(audio.currentTime);
        setDuration(audio.duration || 0);
        setProgress((audio.currentTime / audio.duration) * 100 || 0);
      };

      interval = window.setInterval(update, 500);
    };

    checkAndStart();

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  const seek = (percentage: number) => {
    const audio = audioController.getAudioElement();
    if (!audio || !duration) return;
    audio.currentTime = (percentage / 100) * duration;
  };

  return { currentTime, duration, progress, seek };
}
