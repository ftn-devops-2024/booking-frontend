import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ReservationService} from "../../service/reservation.service";

@Component({
  selector: 'app-my-reservation-list-tile',
  standalone: true,
    imports: [
        MatButton
    ],
  templateUrl: './my-reservation-list-tile.component.html',
  styleUrl: './my-reservation-list-tile.component.scss'
})
export class MyReservationListTileComponent {
  @Input() id:string|undefined;

  constructor(private reservationService: ReservationService) {}

  delete(){
    this.reservationService.deleteReservation(this.id??'1').subscribe(
      {
        next:(data)=>console.log(data),
        error:(data)=>console.log(data),
      }
    )
  }
}
