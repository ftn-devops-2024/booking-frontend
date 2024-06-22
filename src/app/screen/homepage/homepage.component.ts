import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { NgForOf } from '@angular/common';
import { StayListTileComponent } from '../../component/stay-list-tile/stay-list-tile.component';
import { SearchStay } from '../../model/searchStay';
import { ReservationService } from '../../service/reservation.service';
import { Stay } from '../../model/stay';
import { ToastrService } from 'ngx-toastr';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    FormsModule,
    MatFormField,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatDatepicker,
    MatMomentDateModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIcon,
    MatMiniFabButton,
    NgForOf,
    MatButton,
    StayListTileComponent,
  ],
  providers: [MatDatepickerModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss',
})
export class HomepageComponent {
  startDate: Date = new Date();
  perks: String[] = ['Wi-fi', 'Parking', 'Pet friendly'];
  searchStay: SearchStay = new SearchStay();
  foundStays: Stay[] = [new Stay()];
  days: number = 1;

  constructor(
    private reservationService: ReservationService,
    private toastr: ToastrService,
    private webSocketService: WebsocketService
  ) {}

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }

  search() {
    console.log(this.searchStay);
    if (this.searchStay.startDate == null || this.searchStay.endDate == null) {
      alert('Please choose dates!');
      return;
    }
    if (this.searchStay.location == '') {
      alert('Please choose location!');
      return;
    }
    const differenceInTime =
      this.searchStay.endDate.getTime() - this.searchStay.startDate.getTime();
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    const day = Math.abs(differenceInDays);
    this.days = Math.round(day);
    this.reservationService.searchStays(this.searchStay).subscribe({
      next: (data) => {
        console.log(data);
        this.foundStays = data;
      },
      error: (data) => console.log(data),
    });
  }

  getPhoto(stay: Stay) {
    if (stay.photo) return 'data:image/png;base64,' + stay.photo;
    else return 'assets/ap1.jpg';
  }
}
