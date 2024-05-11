import { MusicVariables } from './music-variables.inteface';

export class Music {
  name: string = '';
  icon: string = '';
  director: string = '';
  src: string = '';
  isPlaying = false;
  currentPlayTime: number = 0;
  private _duration: number = 0;
  private interval!: ReturnType<typeof setInterval>;
  duration: number = 0;
  private _audio = new Audio();
  constructor(args: Partial<MusicVariables>) {
    this.name = args.name ?? '';
    this.icon = args.icon ?? '';
    this.director = args.director ?? '';
    this.src = args.src ?? '';
    this.initilizeAudio();
  }

  initilizeAudio() {
    this._setAudioSrc();
    this._audio.load();
    this._audio.onloadedmetadata = () => {
      this._setDuration();
    };
    this._audio.onended = () => {
      this.isPlaying = false;
      clearInterval(this.interval);
    };

    this._audio.onpause = () => {
      this.isPlaying = false;
      clearInterval(this.interval);
    };
  }

  togglePlayMusicStatus() {
    if (!this.isPlaying) {
      this.playMusic();
    } else {
      this.pauseMusic();
    }
  }

  pauseMusic() {
    this.isPlaying = false;
    this._audio.pause();
    clearInterval(this.interval);
  }

  playMusic() {
    this.isPlaying = true;
    this._audio.play();
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.currentPlayTime = Math.ceil(this._audio.currentTime);
    }, 1000);
  }

  set audioCurrentTime(time: number) {
    this._audio.currentTime = time;
  }

  private _setAudioSrc() {
    this._audio.src = this.src;
  }

  private _setDuration() {
    this._duration = this._audio.duration;
    this.duration = Math.ceil(this._duration);
  }
}
