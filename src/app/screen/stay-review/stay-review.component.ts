import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostReview, StayReview } from '../../model/review';
import { ReviewService } from '../../service/review.service';
import { Stay } from '../../model/stay';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-stay-review',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './stay-review.component.html',
  styleUrl: './stay-review.component.scss',
})
export class StayReviewComponent implements OnInit {
  stayReview: StayReview = new StayReview();
  stays: Stay[] = [];

  constructor(
    private reviewService: ReviewService,
    private webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    //dobavi sve smestaje kod kojih je user bio
    let userId = sessionStorage.getItem('id');
    this.reviewService.getStays(userId ?? '1').subscribe({
      next: (data) => {
        console.log(data);
        this.stays = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  rateStay() {
    this.reviewService.stayReview(this.stayReview).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
