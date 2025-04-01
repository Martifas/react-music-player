import { trackList } from './libs/tracks';
import { useAudioStore } from '../src/store';

const { setPlaying } = useAudioStore.getState();

let audioCtx: AudioContext | null = null;
let audioElement: HTMLAudioElement | null = null;
let track: MediaElementAudioSourceNode | null = null;
let gainNode: GainNode | null = null;
let currentTrackIndex = 0;

const loadTrack = (index: number) => {
  if (!audioElement) return;

  const track = trackList[index];
  if (!track) return;

  audioElement.src = track.src;
  audioElement.load();
};

const setupAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).webkitAudioContext)();
    audioElement = new Audio(trackList[currentTrackIndex].src);
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
    setPlaying(true);
  },

  pause: () => {
    if (!audioElement) return;
    audioElement.pause();
    setPlaying(false);
  },

  next: () => {
    currentTrackIndex = (currentTrackIndex + 1) % trackList.length;
    loadTrack(currentTrackIndex);
    audioController.play();
  },

  previous: () => {
    currentTrackIndex =
      (currentTrackIndex - 1 + trackList.length) % trackList.length;
    loadTrack(currentTrackIndex);
    audioController.play();
  },

  setVolume: (value: number) => {
    if (gainNode) gainNode.gain.value = value;
  },

  getAudioElement: () => audioElement,
};
