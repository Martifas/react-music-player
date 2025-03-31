import PlayButton from './PlayButton';
import SkipButtons from './SkipButtons';
import VolumeControl from './VolumeControl';

function AudioControls() {
  return (
    <>
      <div className="flex justify-center w-screen bg-[#0F172A]">
        <div className="flex items-center gap-3 m-3">
          <SkipButtons>
            <PlayButton />
          </SkipButtons>
        </div>
        <VolumeControl />
      </div>
    </>
  );
}

export default AudioControls;
