import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Music } from '../shared/models/music.class';
import { MusicItemComponent } from '../music-item/music-item.component';
import { replcaeEmptyString } from '../shared/pipes/replcate-empty-string.pipe';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [MusicItemComponent, replcaeEmptyString],
  templateUrl: './music-list.component.html',
  styleUrl: './music-list.component.scss',
})
export class MusicListComponent {
  @Input() musicList: Music[] = [];
  @Input() playListName: string = '';
  @Input() selectedMusicIndex: number = 0;
  @Output() changeMusicEvent = new EventEmitter<number>();
}
