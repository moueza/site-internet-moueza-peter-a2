import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusiqueMusicMouezaComponent } from './musique-music-moueza.component';

describe('MusiqueMusicMouezaComponent', () => {
  let component: MusiqueMusicMouezaComponent;
  let fixture: ComponentFixture<MusiqueMusicMouezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusiqueMusicMouezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusiqueMusicMouezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
