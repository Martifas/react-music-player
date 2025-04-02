import PreviousIcon from '../../assets/PreviousIcon';
import NextIcon from '../../assets/NextIcon';
import { ReactNode } from 'react';
import { audioController } from '../../services/audioController';

type SkipButtonsProps = {
  children?: ReactNode;
};

function SkipButtons({ children }: SkipButtonsProps) {
  return (
    <>
      <button
        className="relative group w-7 h-7 mr-3 flex cursor-pointer justify-center items-center border border-gray-300 rounded-full hover:scale-110 transition"
        aria-label="Previous"
        title="Previous"
        onClick={() => audioController.previous()}
      >
        <PreviousIcon />
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Previous
        </span>
      </button>

      {children}

      <button
        aria-label="Next"
        className="relative group w-7 h-7 ml-3 cursor-pointer border-1 border-gray-300 rounded-full flex justify-center items-center"
        onClick={() => audioController.next()}
      >
        <NextIcon />

        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Next
        </span>
      </button>
    </>
  );
}

export default SkipButtons;
