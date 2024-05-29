import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from "../../model/user";
import {DateRange, SpecialPrices, Stay} from "../../model/stay";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {MatFormField} from "@angular/material/form-field";
import {
  MatDatepicker,
  MatDatepickerInput, MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatNativeDateModule} from "@angular/material/core";
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import {NgForOf, NgIf} from "@angular/common";
import {ReservationService} from "../../service/reservation.service";
import {HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-create-stay',
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
    NgMultiSelectDropDownModule,
    NgForOf,
    NgIf,
    HttpClientModule
  ],
  templateUrl: './create-stay.component.html',
  styleUrl: './create-stay.component.scss'
})
export class CreateStayComponent implements OnInit{
  stay: Stay = new Stay();
  dropdownList:any[] = [];
  selectedItems:any[] = [];
  dropdownSettings:IDropdownSettings = {};
  today:Date = new Date();

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.stay.availabilityPeriods.push(new DateRange())
    this.stay.specialPrices.push(new SpecialPrices())
    this.dropdownList = [
      { item_id: 1, item_text: 'Parking' },
      { item_id: 2, item_text: 'Wi-fi' },
      { item_id: 3, item_text: 'Kitchen' },
      { item_id: 4, item_text: 'Air condition' },
      { item_id: 5, item_text: 'Pet friendly' }
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

  onFileSelected(event: any) {
    for(let f of event.target.files){
      console.log(f.name);
      this.stay.photos.push(f.name);
    }
  }

  save(){
    this.stay.benefits = this.selectedItems.map(item => item.item_text);
    console.log(this.selectedItems);
    console.log(this.stay);
    this.reservationService.createStay(this.stay).subscribe(
      {
        next:(data)=>console.log(data),
        error:(data)=>console.log(data),
      }
    )
  }

  addRange(){
    this.stay.availabilityPeriods.push(new DateRange())
  }

  removeRange(index:number){
    this.stay.availabilityPeriods.splice(index,1);
  }

  addSpecialPrice(){
    this.stay.specialPrices.push(new SpecialPrices())
  }

  removeSpecialPrices(index:number){
    this.stay.specialPrices.splice(index,1);
  }

}
