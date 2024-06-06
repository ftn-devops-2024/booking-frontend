import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayListTileComponent } from './stay-list-tile.component';

describe('StayListTileComponent', () => {
  let component: StayListTileComponent;
  let fixture: ComponentFixture<StayListTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StayListTileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StayListTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
