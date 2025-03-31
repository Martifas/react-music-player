import PreviousIcon from '../assets/PreviousIcon';
import NextIcon from '../assets/NextIcon';
import { ReactNode } from 'react';

type SkipButtonsProps = {
  children?: ReactNode;
};

function SkipButtons({ children }: SkipButtonsProps) {
  return (
    <>
      <div className="relative group w-10 h-10 mr-3">
        <button className="w-full h-full text-white flex justify-center items-center">
          <PreviousIcon />
        </button>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Previous
        </span>
      </div>

      {children}

      <div className="relative group w-10 h-10 ml-3">
        <button className="w-full h-full text-white flex justify-center items-center">
          <NextIcon />
        </button>
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Next
        </span>
      </div>
    </>
  );
}

export default SkipButtons;
