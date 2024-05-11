import { Component } from '@angular/core';
import { MusicAndListComponent } from '../music-and-list/music-and-list.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [MusicAndListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent {

}
