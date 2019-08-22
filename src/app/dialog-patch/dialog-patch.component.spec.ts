import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogPatchComponent } from './dialog-patch.component';

describe('DialogPatchComponent', () => {
  let component: DialogPatchComponent;
  let fixture: ComponentFixture<DialogPatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogPatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogPatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
