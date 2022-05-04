import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExpansionComponent } from './item-expansion.component';

describe('ItemExpansionComponent', () => {
  let component: ItemExpansionComponent;
  let fixture: ComponentFixture<ItemExpansionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemExpansionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExpansionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
