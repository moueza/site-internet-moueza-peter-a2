import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlenderV28ShortcutsMouezaComponent } from './blender-v28-shortcuts-moueza.component';

describe('BlenderV28ShortcutsMouezaComponent', () => {
  let component: BlenderV28ShortcutsMouezaComponent;
  let fixture: ComponentFixture<BlenderV28ShortcutsMouezaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlenderV28ShortcutsMouezaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlenderV28ShortcutsMouezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
