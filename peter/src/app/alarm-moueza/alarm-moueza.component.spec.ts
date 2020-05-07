import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlarmMouezaComponent } from './alarm-moueza.component';

describe('AlarmMouezaComponent', () => {
  let component: AlarmMouezaComponent;
  let fixture: ComponentFixture<AlarmMouezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlarmMouezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlarmMouezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
