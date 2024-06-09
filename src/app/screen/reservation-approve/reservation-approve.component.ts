import { Component } from '@angular/core';
import {StayListTileComponent} from "../../component/stay-list-tile/stay-list-tile.component";
import {ReservationListTileComponent} from "../../component/reservation-list-tile/reservation-list-tile.component";

@Component({
  selector: 'app-reservation-approve',
  standalone: true,
  imports: [
    StayListTileComponent,
    ReservationListTileComponent
  ],
  templateUrl: './reservation-approve.component.html',
  styleUrl: './reservation-approve.component.scss'
})
export class ReservationApproveComponent {

}
