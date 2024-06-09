import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationListTileComponent } from './reservation-list-tile.component';

describe('ReservationListTileComponent', () => {
  let component: ReservationListTileComponent;
  let fixture: ComponentFixture<ReservationListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationListTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReservationListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
