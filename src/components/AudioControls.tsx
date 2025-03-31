import PlayButton from './PlayButton';
import SkipButtons from './SkipButtons';

function AudioControls() {
  return (
    <>
      <div className="flex w-screen bg-stone-200 text-black">
        <div className="flex gap-3 m-3">
          <SkipButtons>
            <PlayButton />
          </SkipButtons>
        </div>
      </div>
    </>
  );
}

export default AudioControls;
