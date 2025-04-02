import { useAudioStore } from '../stores/audioStore';
import { useTrackStore } from '../stores/trackStore';

let audioCtx: AudioContext | null = null;
let audioElement: HTMLAudioElement | null = null;
let track: MediaElementAudioSourceNode | null = null;
let gainNode: GainNode | null = null;

const internalLoadTrack = (index: number) => {
  const tracks = useTrackStore.getState().tracks;
  const trackData = tracks[index];

  if (!trackData) {
    return;
  }

  if (!audioCtx) {
    audioCtx = new (window.AudioContext ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).webkitAudioContext)();
    audioElement = new Audio(trackData.src);
    audioElement.crossOrigin = 'anonymous';

    track = audioCtx.createMediaElementSource(audioElement);
    gainNode = audioCtx.createGain();
    track.connect(gainNode).connect(audioCtx.destination);

    audioElement.addEventListener('ended', () => {
      audioController.next();
    });
  } else {
    audioElement!.src = trackData.src;
    audioElement!.load();
  }

  useAudioStore.getState().setCurrentTrackIndex(index);
};

export const audioController = {
  play: () => {
    if (!audioCtx || !audioElement) return;

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    audioElement.play();
    useAudioStore.getState().setPlaying(true);
  },

  pause: () => {
    if (!audioElement) return;
    audioElement.pause();
    useAudioStore.getState().setPlaying(false);
  },

  next: () => {
    const trackList = useTrackStore.getState().tracks;
    const currentIndex = useAudioStore.getState().currentTrackIndex;
    const nextIndex = (currentIndex + 1) % trackList.length;
    internalLoadTrack(nextIndex);
    audioController.play();
  },

  previous: () => {
    const trackList = useTrackStore.getState().tracks;
    const currentIndex = useAudioStore.getState().currentTrackIndex;
    const prevIndex = (currentIndex - 1 + trackList.length) % trackList.length;
    internalLoadTrack(prevIndex);
    audioController.play();
  },

  setVolume: (value: number) => {
    if (gainNode) gainNode.gain.value = value;
  },

  getAudioElement: () => audioElement,
  loadAndPlayById: (id: number) => {
    const tryPlay = () => {
      const tracks = useTrackStore.getState().tracks;
      const index = tracks.findIndex((t) => t.id === id);
      const track = tracks[index];

      if (!track) {
        setTimeout(tryPlay, 100);
        return;
      }

      internalLoadTrack(index);
      audioController.play();
    };

    tryPlay();
  },
};
