import { Component, Input } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { NgForOf, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Stay } from '../../model/stay';
import { ReservationService } from '../../service/reservation.service';
import { Reservation, ReservationDTO } from '../../model/reservation';
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-stay-list-tile',
  standalone: true,
  imports: [MatButton, NgForOf, NgIf, RouterLink],
  templateUrl: './stay-list-tile.component.html',
  styleUrl: './stay-list-tile.component.scss',
})
export class StayListTileComponent {
  @Input() isMyStays: boolean | undefined;
  @Input() stay: Stay | undefined;
  @Input() days: number | undefined;
  @Input() photo: string = '';
  @Input() startDate: Date = new Date();
  @Input() endDate: Date = new Date();
  @Input() numberOfGuests: number | undefined;
  role: string = sessionStorage.getItem('role') ?? '';

  constructor(private reservationService: ReservationService,
              private toast: ToastrService) {}

  reserve() {
    let reservation: ReservationDTO = new ReservationDTO();
    reservation.accommodationId = this.stay?.id ?? 1;
    reservation.accommodationName = this.stay?.name ?? '';
    reservation.ownerId = this.stay?.ownerId ?? '';
    reservation.numberOfGuests = this.numberOfGuests ?? 1;
    reservation.startDate = this.startDate;
    reservation.endDate = this.endDate;
    reservation.guestId = sessionStorage.getItem('id') ?? '1';
    this.reservationService.createReservation(reservation).subscribe({
      next: (data) => {
        console.log(data);
        this.toast.success('Reservation created!');
      },
      error: (data) => console.log(data),
    });
  }
}
