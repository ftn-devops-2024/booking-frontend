import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayStayReviewComponent } from './display-stay-review.component';

describe('DisplayStayReviewComponent', () => {
  let component: DisplayStayReviewComponent;
  let fixture: ComponentFixture<DisplayStayReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayStayReviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplayStayReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
