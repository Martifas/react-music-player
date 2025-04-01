type SongCardProps = {
  position: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
};

function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function SongCard({ position, title, artist, album, duration }: SongCardProps) {
  return (
    <div className="grid grid-cols-12 items-center py-2 px-2 border-1 border-blue-300 rounded bg-white/70 hover:bg-white/90 transition">
      <div className="col-span-1 text-gray-700">{position}</div>
      <div className="col-span-6">
        <div className="font-medium text-black">{title}</div>
        <div className="text-sm text-gray-600">{artist}</div>
      </div>
      <div className="col-span-3 text-gray-700">{album}</div>
      <div className="col-span-2 text-right text-gray-700">
        {formatDuration(duration)}
      </div>
    </div>
  );
}

export default SongCard;
