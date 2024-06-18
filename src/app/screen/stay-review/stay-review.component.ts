import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HostReview, StayReview} from "../../model/review";
import {ReviewService} from "../../service/review.service";

@Component({
  selector: 'app-stay-review',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './stay-review.component.html',
  styleUrl: './stay-review.component.scss'
})
export class StayReviewComponent {
  stayReview: StayReview = new StayReview();

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit(): void {
    //dobavi sve smestaje kod kojih je user bio
  }

  rateStay(){
    this.reviewService.stayReview(this.stayReview).subscribe({
      next: data => {console.log(data);},
      error: error => {console.log(error);},
    })
  }
}
