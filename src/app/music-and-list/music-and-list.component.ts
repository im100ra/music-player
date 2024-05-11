import { Component, OnInit } from '@angular/core';
import { Music } from '../shared/models/music.class';
import { MusicListComponent } from '../music-list/music-list.component';
import { MusicPlayerContainerComponent } from '../music-player-container/music-player-container.component';

@Component({
  selector: 'app-music-and-list',
  standalone: true,
  imports: [MusicListComponent, MusicPlayerContainerComponent],
  templateUrl: './music-and-list.component.html',
  styleUrl: './music-and-list.component.scss',
})
export class MusicAndListComponent implements OnInit {
  musicList: Music[] = [];
  selectedMusicIndex = 0;

  changeMusicEvent(index: number) {
    this.selectedMusicIndex += index;
  }

  setMusicByIndex(index: number) {
    this.musicList[this.selectedMusicIndex].pauseMusic();
    this.selectedMusicIndex = index;
  }

  ngOnInit(): void {
    this.musicList.push(
      new Music({
        src: 'https://s3.avapedia.com/avapedia-1402/12/Farzad%20Farzin%20-%20Cheshmat.mp3',
      })
    );
    this.musicList.push(
      new Music({
        src: 'https://www.soundjay.com/buttons/beep-01a.wav',
      })
    );
  }
}
