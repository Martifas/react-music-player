import { trackList } from '../../libs/tracks';
import SongCard from './SongCard';

function Playlist() {
  return (
    <>
      <div className="h-full w-full bg-gradient-to-b from-blue-100 to-blue-200">
        {trackList.map((song) => (
          <SongCard key={song.id} title={song.title} artist={song.artist} />
        ))}
      </div>
    </>
  );
}

export default Playlist;
