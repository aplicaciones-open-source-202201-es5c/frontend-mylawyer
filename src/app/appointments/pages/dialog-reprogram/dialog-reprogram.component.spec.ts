import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogReprogramComponent } from './dialog-reprogram.component';

describe('DialogReprogramComponent', () => {
  let component: DialogReprogramComponent;
  let fixture: ComponentFixture<DialogReprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogReprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogReprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
