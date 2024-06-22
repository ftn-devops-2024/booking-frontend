import { Component, OnInit } from '@angular/core';
import { StayListTileComponent } from '../../component/stay-list-tile/stay-list-tile.component';
import { ReservationListTileComponent } from '../../component/reservation-list-tile/reservation-list-tile.component';
import { ReservationService } from '../../service/reservation.service';
import { Reservation } from '../../model/reservation';
import { NgForOf } from '@angular/common';
import { WebsocketService } from '../../service/websocket.service';
import { Stay } from '../../model/stay';

@Component({
  selector: 'app-reservation-approve',
  standalone: true,
  imports: [StayListTileComponent, ReservationListTileComponent, NgForOf],
  templateUrl: './reservation-approve.component.html',
  styleUrl: './reservation-approve.component.scss',
})
export class ReservationApproveComponent implements OnInit {
  reservations: Reservation[] = [];

  constructor(
    private reservationService: ReservationService,
    private webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    const userId = sessionStorage.getItem('id');
    this.reservationService.getAllReservations(userId ?? '1').subscribe({
      next: (data) => {
        console.log(data);
        for (let d of data) {
          let reservation = d;
          reservation.startDate = new Date(
            d.startDate[0],
            d.startDate[1],
            d.startDate[2]
          );
          reservation.endDate = new Date(
            d.endDate[0],
            d.endDate[1],
            d.endDate[2]
          );
          reservation.accommodation = new Stay();
          reservation.accommodation.name = d.accommodationName;
          reservation.status = d.status;
          reservation.guestName = d.guestName + ' ' + d.guestSurname;
          this.reservations.push(reservation);
        }
      },
      error: (data) => console.log(data),
    });
  }
}
