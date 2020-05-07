import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TennisMatchCounterComponent } from './tennis-match-counter.component';

describe('TennisMatchCounterComponent', () => {
  let component: TennisMatchCounterComponent;
  let fixture: ComponentFixture<TennisMatchCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TennisMatchCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TennisMatchCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
