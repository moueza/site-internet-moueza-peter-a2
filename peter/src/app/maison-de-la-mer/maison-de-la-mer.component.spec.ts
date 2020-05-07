import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonDeLaMerComponent } from './maison-de-la-mer.component';

describe('MaisonDeLaMerComponent', () => {
  let component: MaisonDeLaMerComponent;
  let fixture: ComponentFixture<MaisonDeLaMerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaisonDeLaMerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonDeLaMerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
