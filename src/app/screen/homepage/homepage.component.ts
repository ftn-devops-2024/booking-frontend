import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "@angular/material/datepicker";
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatMiniFabButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {StayListTileComponent} from "../../component/stay-list-tile/stay-list-tile.component";
import {SearchStay} from "../../model/searchStay";
import {ReservationService} from "../../service/reservation.service";

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
    StayListTileComponent
  ],providers:[
    MatDatepickerModule
  ],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {
  startDate:Date = new Date();
  perks:String[]=['Wi-fi','Parking','Pet friendly'];
  searchStay:SearchStay=new SearchStay();

  constructor(private reservationService: ReservationService) {
  }

  search(){
    this.reservationService.searchStays(this.searchStay).subscribe(
      {
        next:(data)=>console.log(data),
        error:(data)=>console.log(data),
      }
    )
  }

}
