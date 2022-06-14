import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLawyerComponent } from './search-lawyer.component';

describe('SearchLawyerComponent', () => {
  let component: SearchLawyerComponent;
  let fixture: ComponentFixture<SearchLawyerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchLawyerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchLawyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
