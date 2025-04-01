import PlayButton from './PlayButton';
import ProgressBar from './ProgressBar';
import SkipButtons from './SkipButtons';
import VolumeControl from './VolumeControl';
import { useAudioStore } from '../../store';
import { trackList } from '../../libs/tracks';

function AudioControls() {
  const index = useAudioStore((state) => state.currentTrackIndex);

  return (
    <>
      <div className="flex flex-col bg-[#0F172A]">
        <div className="flex w-screen  items-center">
          <div className="flex-1 text-white px-4">
            <div className="pl-5 sm:pl-10 text-nowrap">
              {trackList[index].title}
            </div>
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
        <div>
          <ProgressBar />
        </div>
      </div>
    </>
  );
}

export default AudioControls;
