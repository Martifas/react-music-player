import { useAudioProgress } from '../../hooks/useAudioProgress';

function ProgressBar() {
  const { progress, currentTime, duration, seek } = useAudioProgress();

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    seek(value);
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
