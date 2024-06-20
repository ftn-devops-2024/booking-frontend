import {Component, OnInit} from '@angular/core';
import {StayListTileComponent} from "../../component/stay-list-tile/stay-list-tile.component";
import {ReservationListTileComponent} from "../../component/reservation-list-tile/reservation-list-tile.component";
import {ReservationService} from "../../service/reservation.service";
import {Reservation} from "../../model/reservation";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-reservation-approve',
  standalone: true,
  imports: [
    StayListTileComponent,
    ReservationListTileComponent,
    NgForOf
  ],
  templateUrl: './reservation-approve.component.html',
  styleUrl: './reservation-approve.component.scss'
})
export class ReservationApproveComponent implements OnInit{
  reservations:Reservation[]= [new Reservation()];

  constructor(private reservationService:ReservationService) {}

  ngOnInit(): void {
    const userId = sessionStorage.getItem('id');
    this.reservationService.getAllReservations(userId ?? '1').subscribe(
      {
        next:(data)=> {
          console.log(data);
          this.reservations = data;
        },
        error:(data)=>console.log(data),
      }
    )
  }



}
