import { Component, EventEmitter, Input, Output , OnChanges} from '@angular/core';

@Component({
  selector: 'app-music-progress',
  standalone: true,
  imports: [],
  templateUrl: './music-progress.component.html',
  styleUrl: './music-progress.component.scss',
})
export class MusicProgressComponent  {
  @Input() max: number = 60;
  @Input() value: number = 0;
  @Output() progressBarChangeEvent = new EventEmitter();
  @Output() progressBarChangingLive = new EventEmitter();
}
