import { Component, OnInit } from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { NgForOf } from '@angular/common';
import { HostReview, StayReview } from '../../model/review';
import { ReviewService } from '../../service/review.service';
import { UserService } from '../../service/user.service';
import { ReservationService } from '../../service/reservation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-display-stay-review',
  standalone: true,
  imports: [MatDivider, NgForOf],
  templateUrl: './display-stay-review.component.html',
  styleUrl: './display-stay-review.component.scss',
})
export class DisplayStayReviewComponent implements OnInit {
  reviews: StayReview[] = [];
  averageGrade: number = 1;
  stayId: string = '';

  constructor(
    private reviewService: ReviewService,
    private userService: UserService,
    private reservationService: ReservationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.stayId = this.route.snapshot.paramMap.get('id') ?? '0';
    this.reviewService.getStayReviews(this.stayId).subscribe({
      next: (data) => {
        console.log(data);
        this.reviews = data;
        for (let rev of this.reviews) {
          this.userService.getUser(rev.guestId).subscribe({
            next: (data) => {
              this.reservationService.getStay(rev.accommodationId).subscribe({
                next: (data2) => {
                  let ind = this.reviews.indexOf(rev);
                  rev.accommodationName = data2.name;
                  rev.guestName = data.name + ' ' + data.surname;
                  this.reviews[ind] = rev;
                },
                error: (error) => {
                  console.log(error);
                },
              });
            },
            error: (error) => {
              console.log(error);
            },
          });
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
    this.reviewService.getStayAverageGrade(this.stayId).subscribe({
      next: (data) => {
        this.averageGrade = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
