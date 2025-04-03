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
      <div className="flex font-semibold text-gray-700 px-1 mt-3 pb-2 mb-2">
        <span className="flex-1 max-w-20 text-center">#</span>
        <span className="flex-2 max-w-32 "></span>
        <span className="flex-6">Title</span>
        <span className="flex-3">Album</span>
        <span className="flex-2 text-right sm:text-center">Duration</span>
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
