import { useEffect } from 'react';
import './App.css';
import AudioControls from './components/AudioControlPanel/AudioControls';
import { useTrackStore } from './stores/trackStore';
import PlaylistContainer from './components/Playlist/PlaylistContainer';

function App() {
  const fetchTracks = useTrackStore((state) => state.fetchTracks);

  useEffect(() => {
    const loadTracks = async () => {
      await fetchTracks();
    };

    loadTracks();
  }, [fetchTracks]);
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <PlaylistContainer />
        </div>
        <div className="flex-none">
          <AudioControls />
        </div>
      </div>
    </>
  );
}

export default App;
