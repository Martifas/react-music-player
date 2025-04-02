import { trackList } from './lib/tracks';
import { useAudioStore } from './states/audioState';

let audioCtx: AudioContext | null = null;
let audioElement: HTMLAudioElement | null = null;
let track: MediaElementAudioSourceNode | null = null;
let gainNode: GainNode | null = null;

const internalLoadTrack = (index: number) => {
  if (!audioElement) return;

  const trackData = trackList[index];
  if (!trackData) return;

  audioElement.src = trackData.src;
  audioElement.load();

  useAudioStore.getState().setCurrentTrackIndex(index);
};

const setupAudio = () => {
  if (!audioCtx) {
    const index = useAudioStore.getState().currentTrackIndex;

    audioCtx = new (window.AudioContext ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).webkitAudioContext)();
    audioElement = new Audio(trackList[index].src);
    audioElement.crossOrigin = 'anonymous';

    track = audioCtx.createMediaElementSource(audioElement);
    gainNode = audioCtx.createGain();
    track.connect(gainNode).connect(audioCtx.destination);

    audioElement.addEventListener('ended', () => {
      audioController.next();
    });
  }
};

setupAudio();

export const audioController = {
  play: () => {
    setupAudio();
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
    const currentIndex = useAudioStore.getState().currentTrackIndex;
    const nextIndex = (currentIndex + 1) % trackList.length;
    internalLoadTrack(nextIndex);
    audioController.play();
  },

  previous: () => {
    const currentIndex = useAudioStore.getState().currentTrackIndex;
    const prevIndex = (currentIndex - 1 + trackList.length) % trackList.length;
    internalLoadTrack(prevIndex);
    audioController.play();
  },

  setVolume: (value: number) => {
    if (gainNode) gainNode.gain.value = value;
  },

  getAudioElement: () => audioElement,

  loadAndPlay: (index: number) => {
    internalLoadTrack(index);
    audioController.play();
  },
};
