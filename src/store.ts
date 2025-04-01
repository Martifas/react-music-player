import { create } from 'zustand';

type AudioState = {
  currentTrackIndex: number;
  playing: boolean;
  setCurrentTrackIndex: (index: number) => void;
  setPlaying: (state: boolean) => void;
};

export const useAudioStore = create<AudioState>((set) => ({
  currentTrackIndex: 0,
  playing: false,
  setCurrentTrackIndex: (index) => set({ currentTrackIndex: index }),
  setPlaying: (state) => set({ playing: state }),
}));
