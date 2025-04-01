import './App.css';
import AudioControls from './components/AudioControlPanel/AudioControls';
import Playlist from './components/Playlist/Playlist';

function App() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col">
        <div className="flex-1 overflow-y-auto overflow-x-hidden">
          <Playlist />
        </div>
        <div className="flex-none">
          <AudioControls />
        </div>
      </div>
    </>
  );
}

export default App;
