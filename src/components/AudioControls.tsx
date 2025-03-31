import PlayButton from './PlayButton';
import SkipButtons from './SkipButtons';
import VolumeControl from './VolumeControl';

function AudioControls() {
  return (
    <>
      <div className="flex w-screen bg-[#0F172A] items-center">
        <div className="flex-1 text-white px-4">
          <div className="pl-5 sm:pl-10 text-nowrap">Now Playing</div>
        </div>

        <div className="flex justify-center items-center py-3 flex-1">
          <SkipButtons>
            <PlayButton />
          </SkipButtons>
        </div>

        <div className="flex-1 flex justify-end">
          <div className="pr-5 sm:pr-10 flex item-center">
            <VolumeControl />
          </div>
        </div>
      </div>
    </>
  );
}

export default AudioControls;
