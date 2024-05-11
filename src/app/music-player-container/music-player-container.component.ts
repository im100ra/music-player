import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  Output,
  EventEmitter
} from '@angular/core';
import { Music } from '../shared/models/music.class';
import { CommonModule } from '@angular/common';
import { replcaeEmptyString } from '../shared/pipes/replcate-empty-string.pipe';
import { MusicProgressComponent } from '../music-progress/music-progress.component';
import { secondToTime } from '../shared/pipes/second-to-time.pipe';

@Component({
  selector: 'app-music-player-container',
  standalone: true,
  imports: [
    CommonModule,
    replcaeEmptyString,
    MusicProgressComponent,
    secondToTime,
  ],
  templateUrl: './music-player-container.component.html',
  styleUrl: './music-player-container.component.scss',
})
export class MusicPlayerContainerComponent implements OnChanges, OnInit {
  @Input() musicList: Music[] = [];
  @Input() selectedMusicIndex = 0;
  @Output() changeMusicEvent = new EventEmitter<number>();
  selectedMusic!: Music;

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedMusic = this.musicList[this.selectedMusicIndex];
  }

  ngOnInit(): void {}

  progressBarChangeEvent(event: Event) {
    const value = (event?.target as HTMLInputElement).value;
    if (value) {
      try {
        const currentPlayTime = parseInt(value);
        this.selectedMusic.audioCurrentTime = currentPlayTime;
        this.selectedMusic.playMusic();
      } catch (e) {
        console.log('error in parsing time progress bar!');
      }
    }
  }

  progressBarChangingLive(event: Event) {
    const value = (event?.target as HTMLInputElement).value;
    if (value) {
      try {
        if (this.selectedMusic.isPlaying) {
          this.selectedMusic.pauseMusic();
        }
        const currentPlayTime = parseInt(value);
        this.selectedMusic.currentPlayTime = currentPlayTime;
      } catch (e) {
        console.log('error in parsing time progress bar!');
      }
    }
  }

  play() {
    this.selectedMusic.togglePlayMusicStatus();
  }

  back() {
    this.selectedMusic.pauseMusic();
    this.changeMusicEvent.emit(-1)
  }

  next() {
    this.selectedMusic.pauseMusic();
    this.changeMusicEvent.emit(1)
  }
}
