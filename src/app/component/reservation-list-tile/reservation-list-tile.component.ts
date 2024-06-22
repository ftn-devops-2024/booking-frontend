import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgForOf, NgIf } from '@angular/common';
import { ReservationService } from '../../service/reservation.service';
import { Reservation } from '../../model/reservation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reservation-list-tile',
  standalone: true,
  imports: [MatButton, NgForOf, NgIf],
  templateUrl: './reservation-list-tile.component.html',
  styleUrl: './reservation-list-tile.component.scss',
})
export class ReservationListTileComponent {
  @Input() reservation: Reservation | undefined;

  constructor(
    private reservationService: ReservationService,
    private toastrService: ToastrService
  ) {}

  approve() {
    if (this.reservation != undefined) {
      this.reservationService
        .approveReservation(this.reservation.id.toString())
        .subscribe({
          next: (data) => {
            console.log(data);
            this.toastrService.success('Reservation approved!');
            window.location.reload();
          },
          error: (data) => console.log(data),
        });
    }
  }

  decline() {
    if (this.reservation != undefined) {
      this.reservationService
        .rejectReservation(this.reservation.id.toString())
        .subscribe({
          next: (data) => {
            console.log(data);
            this.toastrService.success('Reservation rejected!');
            window.location.reload();
          },
          error: (data) => console.log(data),
        });
    }
  }
}
