import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {User} from "../../model/user";
import {Stay} from "../../model/stay";
import {NgMultiSelectDropDownModule} from "ng-multiselect-dropdown";
import { IDropdownSettings } from 'ng-multiselect-dropdown';

@Component({
  selector: 'app-create-stay',
  standalone: true,
  imports: [
    FormsModule,
    NgMultiSelectDropDownModule
  ],
  templateUrl: './create-stay.component.html',
  styleUrl: './create-stay.component.scss'
})
export class CreateStayComponent implements OnInit{
  stay: Stay = new Stay();
  dropdownList:any[] = [];
  selectedItems:any[] = [];
  dropdownSettings:IDropdownSettings = {};

  ngOnInit() {
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
    }
  }

  save(){
    console.log(this.selectedItems);
  }
}
