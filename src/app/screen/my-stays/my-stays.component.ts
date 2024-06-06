import { Component } from '@angular/core';
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
    StayListTileComponent
  ],
  templateUrl: './my-stays.component.html',
  styleUrl: './my-stays.component.scss'
})
export class MyStaysComponent {

}
