import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwordKilledWomanMouezaBlenderComponent } from './sword-killed-woman-moueza-blender.component';

describe('SwordKilledWomanMouezaBlenderComponent', () => {
  let component: SwordKilledWomanMouezaBlenderComponent;
  let fixture: ComponentFixture<SwordKilledWomanMouezaBlenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwordKilledWomanMouezaBlenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwordKilledWomanMouezaBlenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
