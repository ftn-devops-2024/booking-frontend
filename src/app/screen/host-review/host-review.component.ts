import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HostReview } from '../../model/review';
import { ReviewService } from '../../service/review.service';
import { User } from '../../model/user';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-host-review',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './host-review.component.html',
  styleUrl: './host-review.component.scss',
})
export class HostReviewComponent implements OnInit {
  hostReview: HostReview = new HostReview();
  hosts: User[] = [];

  constructor(
    private reviewService: ReviewService,
    private webSocketService: WebsocketService
  ) {}

  ngOnInit(): void {
    //dobavi sve hostove kod kojih je user bio
    let userId = sessionStorage.getItem('id');
    this.reviewService.getHosts(userId ?? '1').subscribe({
      next: (data) => {
        console.log(data);
        this.hosts = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  rateHost() {
    this.hostReview.hostId = '6674ae5ebe30d8604d4689ce';
    this.hostReview.guestId = '6';

    this.reviewService.hostReview(this.hostReview).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
