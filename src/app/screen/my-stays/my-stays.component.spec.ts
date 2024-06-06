import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStaysComponent } from './my-stays.component';

describe('MyStaysComponent', () => {
  let component: MyStaysComponent;
  let fixture: ComponentFixture<MyStaysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyStaysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyStaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
