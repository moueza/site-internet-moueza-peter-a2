import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChronometreMouezaComponent } from './chronometre-moueza.component';

describe('ChronometreMouezaComponent', () => {
  let component: ChronometreMouezaComponent;
  let fixture: ComponentFixture<ChronometreMouezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronometreMouezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChronometreMouezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
