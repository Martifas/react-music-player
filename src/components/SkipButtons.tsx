import PreviousIcon from '../assets/PreviousIcon.svg';
import NextIcon from '../assets/NextIcon.svg';
import { ReactNode } from 'react';

type SkipButtonsProps = {
  children?: ReactNode;
};

function SkipButtons({ children }: SkipButtonsProps) {
  return (
    <>
      <button className="w-10 h-10">
        <img
          src={PreviousIcon}
          alt="Previous"
          className="w-full h-full cursor-pointer"
        />
      </button>
      {children}
      <button className="w-10 h-10">
        <img
          src={NextIcon}
          alt="Next"
          className="w-full h-full cursor-pointer"
        />
      </button>
    </>
  );
}

export default SkipButtons;
