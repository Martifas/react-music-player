import { trackList } from '../../libs/tracks';
import SongCard from './SongCard';

function Playlist() {
  return (
    <div className="h-full w-full bg-gradient-to-b from-blue-100 to-blue-200 py-4 px-1">
      <div className="grid grid-cols-12 font-semibold text-gray-700 border-b border-gray-300 pb-2 mb-2">
        <span className="col-span-1">#</span>
        <span className="col-span-6">Title</span>
        <span className="col-span-3">Album</span>
        <span className="col-span-2 text-right">Duration</span>
      </div>
      {trackList.map((song, index) => (
        <SongCard
          key={song.id}
          position={index + 1}
          title={song.title}
          artist={song.artist}
          album={song.album}
          duration={song.duration}
        />
      ))}
    </div>
  );
}

export default Playlist;
