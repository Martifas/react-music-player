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
      <div className="w-screen h-screen flex flex-col bg-blue-200">
        <div className="flex-1 w-full bg-white border-1 border-blue-400 sm:max-w-screen-md mx-auto overflow-y-auto overflow-x-hidden">
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
