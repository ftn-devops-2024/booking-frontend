import { Component } from '@angular/core';
import {ReservationListTileComponent} from "../../component/reservation-list-tile/reservation-list-tile.component";
import {
  MyReservationListTileComponent
} from "../../component/my-reservation-list-tile/my-reservation-list-tile.component";

@Component({
  selector: 'app-my-reservations',
  standalone: true,
  imports: [
    ReservationListTileComponent,
    MyReservationListTileComponent
  ],
  templateUrl: './my-reservations.component.html',
  styleUrl: './my-reservations.component.scss'
})
export class MyReservationsComponent {

}
