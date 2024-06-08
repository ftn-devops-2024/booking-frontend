import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {ReservationService} from "../../service/reservation.service";

@Component({
  selector: 'app-reservation-list-tile',
  standalone: true,
    imports: [
        MatButton,
        NgForOf,
        NgIf
    ],
  templateUrl: './reservation-list-tile.component.html',
  styleUrl: './reservation-list-tile.component.scss'
})
export class ReservationListTileComponent {
  @Input() id:string|undefined;

  constructor(private reservationService: ReservationService) {}

  approve(){
    this.reservationService.approveReservation(this.id??'1').subscribe(
      {
        next:(data)=>console.log(data),
        error:(data)=>console.log(data),
      }
    )
  }
}
