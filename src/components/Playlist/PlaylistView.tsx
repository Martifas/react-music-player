import { Track } from '../../stores/trackStore';
import PlaylistTabButton from './PlaylistTabButton';
import SongCard from './SongCard';

type PlaylistViewProps = {
  tracks: Track[];
  filteredTracks: Track[];
  selectedPlaylist: 'all' | 'favorites';
  onSelectPlaylist: (playlist: 'all' | 'favorites') => void;
};

function PlaylistView({
  tracks,
  filteredTracks,
  selectedPlaylist,
  onSelectPlaylist,
}: PlaylistViewProps) {
  return (
    <>
      <div className="flex gap-3 p-3 sticky top-0 bg-blue-100">
        <PlaylistTabButton
          label="All Songs"
          selected={selectedPlaylist === 'all'}
          onClick={() => onSelectPlaylist('all')}
        />
        <PlaylistTabButton
          label="Favorites"
          selected={selectedPlaylist === 'favorites'}
          onClick={() => onSelectPlaylist('favorites')}
        />
      </div>
      {filteredTracks.length === 0 ? (
        <div className="text-gray-600 text-sm text-center py-10">
          {selectedPlaylist === 'favorites'
            ? 'You haven’t added any favorite songs yet.'
            : 'No songs available.'}
        </div>
      ) : (
        filteredTracks.map((song) => {
          const originalIndex = tracks.findIndex((t) => t.id === song.id);
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
        })
      )}
    </>
  );
}

export default PlaylistView;
