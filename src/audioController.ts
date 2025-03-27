let audioCtx: AudioContext | null = null;
let audioElement: HTMLAudioElement | null = null;
let track: MediaElementAudioSourceNode | null = null;
let gainNode: GainNode | null = null;

const setupAudio = () => {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext ||
      (window as any).webkitAudioContext)();
    audioElement = new Audio('/music/funk-1.mp3');
    audioElement.crossOrigin = 'anonymous';

    track = audioCtx.createMediaElementSource(audioElement);
    gainNode = audioCtx.createGain();

    track.connect(gainNode).connect(audioCtx.destination);
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
};
