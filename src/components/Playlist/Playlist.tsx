import { useState } from 'react';
import { useFavoriteStore } from '../../states/favoriteState';
import SongCard from './SongCard';
import { useTrackStore } from '../../states/useTrackState';

function Playlist() {
  const trackList = useTrackStore((state) => state.tracks);
  const [selectedPlaylist, setSelectedPlaylist] = useState<'all' | 'favorites'>(
    'all'
  );
  const favorites = useFavoriteStore((state) => state.favorites);

  const handlePlaylistChange = (playlist: 'all' | 'favorites') => {
    setSelectedPlaylist(playlist);
  };

  const filteredTracks =
    selectedPlaylist === 'favorites'
      ? trackList.filter((track) => favorites.has(track.id))
      : trackList;

  return (
    <div className="w-full bg-gradient-to-b from-blue-100 to-blue-200 py-4 px-1 min-h-screen">
      <div className="flex gap-3 py-3 sticky top-0 bg-blue-100">
        <button
          className={`rounded-full p-2 ${selectedPlaylist === 'all' ? 'bg-blue-400 hover:bg-blue-300' : 'bg-blue-200 hover:bg-blue-100'}`}
          onClick={() => handlePlaylistChange('all')}
        >
          All Songs
        </button>
        <button
          className={`rounded-full p-2 ${selectedPlaylist === 'favorites' ? 'bg-green-400 hover:bg-green-300' : 'bg-green-200 hover:bg-green-100'}`}
          onClick={() => handlePlaylistChange('favorites')}
        >
          Favorites
        </button>
      </div>

      <div className="flex font-semibold text-gray-700 border-b border-gray-300 px-1 pb-2 mb-2">
        <span className="flex-1 max-w-20">#</span>
        <span className="flex-2 max-w-32 "></span>
        <span className="flex-6">Title</span>
        <span className="flex-3">Album</span>
        <span className="flex-2 text-right sm:text-left">Duration</span>
      </div>

      {filteredTracks.map((song, index) => {
        const originalIndex = trackList.findIndex((t) => t.id === song.id);

        return (
          <SongCard
            key={song.id}
            id={song.id}
            position={originalIndex + 1}
            title={song.title}
            artist={song.artist}
            album={song.album}
            duration={song.duration}
            picture={song.image}
          />
        );
      })}
    </div>
  );
}

export default Playlist;
