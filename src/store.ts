import { create } from 'zustand';

type AudioStore = {
  playing: boolean;
  setPlaying: (value: boolean) => void;
};

export const useAudioStore = create<AudioStore>((set) => ({
  playing: false,
  setPlaying: (value) => set({ playing: value }),
}));
