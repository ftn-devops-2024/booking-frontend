import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostReview, StayReview } from '../../model/review';
import { ReviewService } from '../../service/review.service';
import { Stay } from '../../model/stay';
import { WebsocketService } from '../../service/websocket.service';
import { NgForOf, NgIf } from '@angular/common';
import { ReservationService } from '../../service/reservation.service';
import { MatIcon } from '@angular/material/icon';
import { MatMiniFabButton } from '@angular/material/button';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stay-review',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgForOf,
    MatIcon,
    MatMiniFabButton,
    NgIf,
  ],
  templateUrl: './stay-review.component.html',
  styleUrl: './stay-review.component.scss',
})
export class StayReviewComponent implements OnInit {
  stayReview: StayReview = new StayReview();
  stays: Stay[] = [];
  id: string = sessionStorage.getItem('id') ?? '';
  previousReview: StayReview | undefined;

  constructor(
    private reviewService: ReviewService,
    private reservationService: ReservationService,
    private webSocketService: WebsocketService,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    //dobavi sve smestaje kod kojih je user bio
    let userId = sessionStorage.getItem('id');
    this.reservationService.getUserStays(userId ?? '1').subscribe({
      next: (data) => {
        console.log(data);
        this.stays = data;
        this.stayReview.accommodationId = this.stays[0]?.id ?? 1;
        this.getPrevious();
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  getPrevious() {
    this.reviewService
      .getUserAccommodationReview(this.id, this.stayReview.accommodationId)
      .subscribe({
        next: (data) => {
          this.previousReview = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  rateStay() {
    this.stayReview.guestId = this.id;
    this.reviewService.stayReview(this.stayReview).subscribe({
      next: (data) => {
        console.log(data);
        this.toast.success('Successfully rated stay!');
        this.getPrevious();
        window.location.reload();
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
    this.stayReview.rating = Number(selectedValue);
  }

  stayChange(event: Event) {
    console.log(event);
    const selectElement = event.target as HTMLSelectElement;
    const selectedValue = selectElement.value;
    console.log(selectedValue);
    this.stayReview.accommodationId = Number(selectedValue);
  }

  delete() {
    this.reviewService
      .deleteStayReview(this.previousReview?.id ?? 1)
      .subscribe({
        next: (data) => {
          console.log(data);
          this.toast.success('Successfully deleted stay review!');
        },
        error: (error) => {
          console.log(error);
        },
      });
  }
}
