import { Routes } from '@angular/router';
import { MusicPlayerContainerComponent } from './music-player-container/music-player-container.component';
import { MainPageComponent } from './main-page/main-page.component';

export const routes: Routes = [
    {
        path:'',
        component:MainPageComponent
    }
];
