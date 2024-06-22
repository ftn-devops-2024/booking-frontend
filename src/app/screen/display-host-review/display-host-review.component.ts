import {Component, OnInit} from '@angular/core';
import {ReviewService} from "../../service/review.service";
import {HostReview} from "../../model/review";
import {UserService} from "../../service/user.service";
import {ReservationService} from "../../service/reservation.service";
import {NgForOf} from "@angular/common";
import {MatDivider} from "@angular/material/divider";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-display-host-review',
  standalone: true,
  imports: [
    NgForOf,
    MatDivider
  ],
  templateUrl: './display-host-review.component.html',
  styleUrl: './display-host-review.component.scss'
})
export class DisplayHostReviewComponent implements OnInit {
  reviews:HostReview[] = [new HostReview(),new HostReview()];
  averageGrade:number = 1;
  stayId:string='';

  constructor(private reviewService: ReviewService,private userService: UserService,
              private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.stayId = this.route.snapshot.paramMap.get('id') ?? '0';
    this.reviewService.getHostReviews(this.stayId).subscribe({
      next: data => {
        console.log(data);
        this.reviews = data;
        for(let rev of this.reviews){
          this.userService.getUser(rev.hostId).subscribe({
            next: (data) => {
              this.userService.getUser(rev.guestId).subscribe({
                next: (data2) => {
                  let ind = this.reviews.indexOf(rev);
                  rev.hostName = data.name + ' ' + data.suername;
                  rev.guestName = data2.name + ' ' + data2.suername;
                  this.reviews[ind] = rev;
                },
                error: (error) => {console.log(error);}
              })
            },
            error: (error) => {console.log(error);}
          })
        }
      },
      error: (error) => {
        console.log(error);
      }
    })
    this.reviewService.getHostAverageGrade(this.stayId).subscribe({
      next: (data) => {this.averageGrade=data},
      error: (error) => {console.log(error);}
    });
  }


}
