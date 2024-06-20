import {Component, OnInit} from '@angular/core';
import {
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker,
  MatEndDate,
  MatStartDate
} from "@angular/material/datepicker";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatMiniFabButton} from "@angular/material/button";
import {StayListTileComponent} from "../../component/stay-list-tile/stay-list-tile.component";
import {ReservationService} from "../../service/reservation.service";
import {Stay} from "../../model/stay";
import {NgForOf} from "@angular/common";

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
    NgForOf
  ],
  templateUrl: './my-stays.component.html',
  styleUrl: './my-stays.component.scss'
})
export class MyStaysComponent implements OnInit {
  myStays:Stay[] = [new Stay(1,'12','Superkul','Srbija',['Wi-fi','Pet friendly'],[],2,10,30,[],true,[])];

  constructor(private reservationService: ReservationService) {}

  ngOnInit(): void {
    this.reservationService.getAllOwnersStays('123').subscribe(
      {
        next:(data)=> {
          console.log(data);
          this.myStays = data;
        },
        error:(data)=>console.log(data),
      }
    )
  }

}
