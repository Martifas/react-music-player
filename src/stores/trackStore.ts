import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type Track = {
  id: number;
  title: string;
  artist: string;
  album: string;
  duration: number;
  image: string;
  src: string;
};

type TrackState = {
  tracks: Track[];
  isLoaded: boolean;
  fetchTracks: () => Promise<void>;
};

export const useTrackStore = create<TrackState>()(
  persist(
    (set, get) => ({
      tracks: [],
      isLoaded: false,
      fetchTracks: async () => {
        if (get().isLoaded) return;
        const res = await fetch('/tracks.json');
        const data = await res.json();
        set({ tracks: data, isLoaded: true });
      },
    }),
    {
      name: 'track-storage',
    }
  )
);
