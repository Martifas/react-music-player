import { Howl } from 'howler';

function playFunk() {
  const sound = new Howl({ src: ['./assets/music/funk-1.mp3'] });
  sound.play();
}

export default playFunk;
