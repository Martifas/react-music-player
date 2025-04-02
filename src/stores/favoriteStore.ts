import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type FavoriteState = {
  favorites: Set<number>;
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
};

export const useFavoriteStore = create<FavoriteState>()(
  persist(
    (set, get) => ({
      favorites: new Set(),
      toggleFavorite: (id) => {
        const current = new Set(get().favorites);
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        current.has(id) ? current.delete(id) : current.add(id);
        set({ favorites: current });
      },
      isFavorite: (id) => get().favorites.has(id),
    }),
    {
      name: 'favorite-songs',
      partialize: (state) => ({
        favorites: Array.from(state.favorites),
      }),
      merge: (persistedState, currentState) => ({
        ...currentState,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        favorites: new Set((persistedState as any).favorites),
      }),
    }
  )
);
