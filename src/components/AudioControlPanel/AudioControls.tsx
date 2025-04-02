import PlayButton from './PlayButton';
import ProgressBar from './ProgressBar';
import SkipButtons from './SkipButtons';
import VolumeControl from './VolumeControl';
import FavoriteButton from '../FavoriteButton/FavoriteButton';
import { useAudioStore } from '../../states/audioState';
import { trackList } from '../../lib/tracks';
import HollowHeartIcon from '../../assets/HollowHeartIcon';

function AudioControls() {
  const index = useAudioStore((state) => state.currentTrackIndex);

  return (
    <div className="flex flex-col bg-[#0F172A]">
      <div className="flex w-screen  items-center px-4 py-3 overflow-visible relative">
        <div className="relative z-0 flex flex-row items-center sm:justify-center gap-3 max-w-[300px] sm:max-w-none flex-1 overflow-visible">
          <div className="flex flex-col overflow-hidden text-nowrap">
            <div className="font-medium sm:text-lg text-white truncate">
              {trackList[index].title}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 truncate">
              {trackList[index].artist}
            </div>
          </div>
          <FavoriteButton
            id={trackList[index].id}
            NotFavoriteIcon={HollowHeartIcon}
          />
        </div>

        <div className="flex-1 flex justify-center items-center">
          <SkipButtons>
            <PlayButton />
          </SkipButtons>
        </div>

        <div className="flex-1 flex justify-end pr-5 sm:justify-center">
          <VolumeControl />
        </div>
      </div>

      <div>
        <ProgressBar />
      </div>
    </div>
  );
}

export default AudioControls;
