import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { ReservationService } from '../../service/reservation.service';
import { Reservation } from '../../model/reservation';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-reservation-list-tile',
  standalone: true,
  imports: [MatButton],
  templateUrl: './my-reservation-list-tile.component.html',
  styleUrl: './my-reservation-list-tile.component.scss',
})
export class MyReservationListTileComponent {
  @Input() reservation: Reservation | undefined;

  constructor(
    private reservationService: ReservationService,
    private toast: ToastrService
  ) {}

  delete() {
    if (this.reservation != undefined) {
      this.reservationService
        .deleteReservation(this.reservation.id.toString())
        .subscribe({
          next: (data) => {
            console.log(data);
            this.toast.success('Successfully deleted request!');
            window.location.reload();
          },
          error: (data) => console.log(data),
        });
    }
  }
}
