# React Music Player

A user-friendly music player interface built with **React**, **TypeScript**, **Vite**, and **Zustand**.  
Users can browse a list of songs, favorite them, play/pause, skip tracks, control volume, and view current song details with a real-time progress bar.

---

##  Installation

After cloning the repository and installing dependencies with `npm install`, use the following commands:

Development:

```sh
npm run dev
```

Build:

```sh
npm run build
```

And

```sh
npm run preview
```


## Features

### Playback

- **Play/Pause** functionality with intuitive icons
- **Next / Previous** track navigation
- **Volume slider** with real-time audio control
- **Progress bar** with current time & duration display

### Playlist Management

- Display of **all songs** with title, artist, album, duration, and artwork
- **Favorites tab**: filter and play your favorite songs
- Favorites are **persisted across page reloads**

## Tech Stack

- **React** + **TypeScript**
- **Vite** for fast development
- **Zustand** for global state management
- **Immer** for clean immutable updates
- **Web Audio API** + `<audio>` element for audio playback
- **Tailwind CSS** for UI styling
