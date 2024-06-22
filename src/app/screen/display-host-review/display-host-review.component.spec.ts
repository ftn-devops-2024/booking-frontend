import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayHostReviewComponent } from './display-host-review.component';

describe('DisplayHostReviewComponent', () => {
  let component: DisplayHostReviewComponent;
  let fixture: ComponentFixture<DisplayHostReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayHostReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayHostReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
