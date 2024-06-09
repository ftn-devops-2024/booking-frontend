import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyReservationListTileComponent } from './my-reservation-list-tile.component';

describe('MyReservationListTileComponent', () => {
  let component: MyReservationListTileComponent;
  let fixture: ComponentFixture<MyReservationListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyReservationListTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyReservationListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
