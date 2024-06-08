import {Component, Input} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-stay-list-tile',
  standalone: true,
  imports: [
    MatButton,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './stay-list-tile.component.html',
  styleUrl: './stay-list-tile.component.scss'
})
export class StayListTileComponent {
  @Input() isMyStays:boolean|undefined;
  perks:String[]=['Wi-fi','Parking','Pet friendly'];

}
