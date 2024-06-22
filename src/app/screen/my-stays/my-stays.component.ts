import { Component, OnInit } from '@angular/core';
import {
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate,
} from '@angular/material/datepicker';
import {
  MatFormField,
  MatLabel,
  MatSuffix,
} from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatMiniFabButton } from '@angular/material/button';
import { StayListTileComponent } from '../../component/stay-list-tile/stay-list-tile.component';
import { ReservationService } from '../../service/reservation.service';
import { Stay } from '../../model/stay';
import { NgForOf } from '@angular/common';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-my-stays',
  standalone: true,
  imports: [
    MatDateRangeInput,
    MatDateRangePicker,
    MatDatepickerToggle,
    MatEndDate,
    MatFormField,
    MatIcon,
    MatInput,
    MatLabel,
    MatMiniFabButton,
    MatStartDate,
    MatSuffix,
    StayListTileComponent,
    NgForOf,
  ],
  templateUrl: './my-stays.component.html',
  styleUrl: './my-stays.component.scss',
})
export class MyStaysComponent implements OnInit {
  myStays: Stay[] = [];

  constructor(
    private reservationService: ReservationService,
    private webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    const userId = sessionStorage.getItem('id');
    this.reservationService.getAllOwnersStays(userId ?? '1').subscribe({
      next: (data) => {
        console.log(data);
        this.myStays = data;
      },
      error: (data) => console.log(data),
    });
  }

  getPhoto(stay: Stay) {
    if (stay.photo) return 'data:image/png;base64,' + stay.photo;
    else return 'assets/ap1.jpg';
  }
}
