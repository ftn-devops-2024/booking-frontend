import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostReview } from '../../model/review';
import { ReviewService } from '../../service/review.service';
import { User } from '../../model/user';
import { WebsocketService } from '../../service/websocket.service';
import { NgForOf } from '@angular/common';
import { ReservationService } from '../../service/reservation.service';
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-host-review',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, NgForOf, MatIcon, MatMiniFabButton],
  templateUrl: './host-review.component.html',
  styleUrl: './host-review.component.scss',
})
export class HostReviewComponent implements OnInit {
  hostReview: HostReview = new HostReview();
  hosts: User[] = [];
  id: string = sessionStorage.getItem('id') ?? '';
  previousReview: HostReview = new HostReview();

  constructor(
    private reviewService: ReviewService,
    private reservationService: ReservationService,
    private webSocketService: WebsocketService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    //dobavi sve hostove kod kojih je user bio
    let userId = this.id;
    this.reservationService.getUserHosts(userId ?? '1').subscribe({
      next: (data) => {
        console.log(data);
        this.hosts = data;
        this.hostReview.hostId = this.hosts[0]?.id ?? '';
        this.getPrevious()
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getPrevious(){
    this.reviewService.getUserHostReview(this.id,this.hostReview.hostId).subscribe(
      {
        next: (data) => {
          this.previousReview = data;
        },
        error: (error) => {console.log(error);}
      }
    )
  }

  rateHost() {
    this.hostReview.guestId = this.id;
    this.reviewService.hostReview(this.hostReview).subscribe({
      next: (data) => {
        console.log(data);
        this.toast.success('Successfully rated host!');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  gradeChange(event: Event) {
    console.log(event);
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log(selectedValue);
    this.hostReview.rating = Number(selectedValue);
  }

  hostChange(event: Event) {
    console.log(event);
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log(selectedValue);
    this.hostReview.hostId = selectedValue;
    this.getPrevious();
  }

  delete(){
    this.reviewService.deleteHostReview(this.previousReview.id).subscribe({
      next: (data) => {console.log(data);
        this.toast.success('Successfully deleted host review');
        },
      error: (error) => {console.log(error);}
    })
  }
}
