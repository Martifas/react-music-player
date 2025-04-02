import { useState } from 'react';
import { useFavoriteStore } from '../../stores/favoriteStore';
import { useTrackStore } from '../../stores/trackStore';
import PlaylistView from './PlaylistView';

function PlaylistContainer() {
  const trackList = useTrackStore((state) => state.tracks);
  const favorites = useFavoriteStore((state) => state.favorites);
  const [selectedPlaylist, setSelectedPlaylist] = useState<'all' | 'favorites'>(
    'all'
  );

  const filteredTracks =
    selectedPlaylist === 'favorites'
      ? trackList.filter((track) => favorites.has(track.id))
      : trackList;

  return (
    <PlaylistView
      tracks={trackList}
      filteredTracks={filteredTracks}
      selectedPlaylist={selectedPlaylist}
      onSelectPlaylist={setSelectedPlaylist}
    />
  );
}

export default PlaylistContainer;
