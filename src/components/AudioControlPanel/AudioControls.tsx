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
        <div className="relative z-0 flex flex-row items-center sm:justify-center gap-3 max-w-[140px] sm:max-w-none flex-1 overflow-visible">
          <div className="flex flex-col overflow-hidden text-nowrap group">
            <div className="font-medium sm:text-lg text-white truncate">
              {trackList[index].title}
            </div>
            <div className="text-xs sm:text-sm text-gray-300 truncate">
              {trackList[index].artist}
            </div>
            <span className="absolute -top-8 left-0 right-0 mx-auto w-fit max-w-[90vw] bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap overflow-hidden text-ellipsis">
              {trackList[index].title} - {trackList[index].artist}
            </span>
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
