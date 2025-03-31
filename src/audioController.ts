import { trackList } from './libs/tracks';

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
  },

  pause: () => {
    if (!audioElement) return;
    audioElement.pause();
  },

  setVolume: (value: number) => {
    if (gainNode) gainNode.gain.value = value;
  },

  getAudioElement: () => audioElement,

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
};
