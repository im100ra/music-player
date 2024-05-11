import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicAndListComponent } from './music-and-list.component';

describe('MusicAndListComponent', () => {
  let component: MusicAndListComponent;
  let fixture: ComponentFixture<MusicAndListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicAndListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MusicAndListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
