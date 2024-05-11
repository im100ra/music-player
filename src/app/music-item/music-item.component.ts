import { Component , Input } from '@angular/core';
import { Music } from '../shared/models/music.class';
import { DatePipe } from '@angular/common';
import { secondToTime } from '../shared/pipes/second-to-time.pipe';
import { replcaeEmptyString } from '../shared/pipes/replcate-empty-string.pipe';

@Component({
  selector: 'app-music-item',
  standalone: true,
  imports: [secondToTime,replcaeEmptyString],
  templateUrl: './music-item.component.html',
  styleUrl: './music-item.component.scss'
})
export class MusicItemComponent {
  @Input() musicData !: Music;
  @Input() selectedMusicIndex !: number;
  @Input() musicItemIndex !: number;
}
