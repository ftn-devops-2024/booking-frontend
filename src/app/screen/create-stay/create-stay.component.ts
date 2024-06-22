import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DateRange, SpecialPrices, Stay } from '../../model/stay';
import {
  NgMultiSelectDropDownModule,
  IDropdownSettings,
} from 'ng-multiselect-dropdown';
import { MatFormField } from '@angular/material/form-field';
import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle,
} from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NgForOf, NgIf } from '@angular/common';
import { ReservationService } from '../../service/reservation.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WebsocketService } from '../../service/websocket.service';

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
    HttpClientModule,
  ],
  templateUrl: './create-stay.component.html',
  styleUrls: ['./create-stay.component.scss'],
})
export class CreateStayComponent implements OnInit {
  stay: Stay = new Stay();
  dropdownList: any[] = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  today: Date = new Date();
  stayId: string = '';
  photo: any;

  perkMap = {
    'Wi-fi': 'WIFI',
    Kitchen: 'KITCHEN',
    'Air condition': 'AIR_CONDITIONING',
    Parking: 'FREE_PARKING',
    'Pet friendly': 'PET_FRIENDLY',
  };

  reversePerkMap = Object.fromEntries(
    Object.entries(this.perkMap).map(([key, value]) => [value, key])
  );

  constructor(
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private toastr: ToastrService,
    private webSocketService: WebsocketService
  ) {}

  ngOnInit() {
    this.stayId = this.route.snapshot.paramMap.get('id') ?? '0';
    console.log(this.stayId);
    this.dropdownList = [
      { item_id: 1, item_text: 'Wi-fi' },
      { item_id: 2, item_text: 'Kitchen' },
      { item_id: 3, item_text: 'Air condition' },
      { item_id: 4, item_text: 'Parking' },
      { item_id: 5, item_text: 'Pet friendly' },
    ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true,
    };
    if (this.stayId == '0') {
      // New stay
      this.stay.availabilityPeriods.push(new DateRange());
      this.stay.specialPrices.push(new SpecialPrices());
    } else {
      // Fetch stay details from the database
      this.reservationService.getStay(Number(this.stayId)).subscribe({
        next: (data) => {
          this.stay = data;
          this.selectedItems = this.stay.perks.map((perk) => ({
            item_id: this.dropdownList.find(
              (item) => item.item_text === this.reversePerkMap[perk]
            )?.item_id,
            item_text: this.reversePerkMap[perk],
          }));
        },
        error: (error) => console.log(error),
      });
    }
  }

  onItemSelect(item: any) {
    console.log(item);
  }

  onSelectAll(items: any) {
    console.log(items);
  }

  onFileSelected(event: any) {
    this.photo = event.target.files[0];
  }

  save() {
    this.stay.ownerId = sessionStorage.getItem('id') ?? '';

    this.stay.perks = this.selectedItems.map(
      (item) => this.perkMap[item.item_text as keyof typeof this.perkMap]
    );
    console.log(this.selectedItems);
    console.log(this.stay);
    if (this.stayId == '0') {
      this.reservationService.createStay(this.stay).subscribe({
        next: (data) => {
          console.log(data);
          if (this.photo != null)
            this.reservationService
              .uploadImage(data.id, this.photo)
              .subscribe();
          this.toastr.success('Success!', 'Successfully created!');
        },
        error: (error) => console.log(error),
      });
    } else {
      this.reservationService.updateStay(this.stay, this.stayId).subscribe({
        next: (data) => {
          console.log(data);
          this.toastr.success('Success!', 'Successfully updated!');
        },
        error: (error) => console.log(error),
      });
    }
  }

  addRange() {
    this.stay.availabilityPeriods.push(new DateRange());
  }

  removeRange(index: number) {
    this.stay.availabilityPeriods.splice(index, 1);
  }

  addSpecialPrice() {
    this.stay.specialPrices.push(new SpecialPrices());
  }

  removeSpecialPrices(index: number) {
    this.stay.specialPrices.splice(index, 1);
  }
}
