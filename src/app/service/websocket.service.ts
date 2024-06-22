import { Injectable } from '@angular/core';
import SockJS from 'sockjs-client/dist/sockjs';
import Stomp from 'stompjs';
import { HostReview, StayReview } from '../model/review';
import { UserService } from './user.service';
import { User } from '../model/user';
import { ToastrService } from 'ngx-toastr';
import { ReservationService } from './reservation.service';
import { Stay } from '../model/stay';
import { ReservationDto } from '../model/reservationDto';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  reservationUrl = `http://localhost:9000/`;
  reviewUrl = `http://localhost:9003/`;

  id: string | null = sessionStorage.getItem('id');
  role: string | null = sessionStorage.getItem('role');
  user: User = new User();

  private reservationStompClient: any;
  private reviewStompClient: any;

  constructor(
    private userService: UserService,
    private toast: ToastrService,
    private reservationService: ReservationService
  ) {
    if (this.id)
      this.userService.getUser(this.id).subscribe({
        next: (data) => {
          console.log(data);
          this.user = data;
          this.initializeReservationWebSocketConnection();
          this.initializeReviewWebSocketConnection();
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  initializeReservationWebSocketConnection() {
    const ws = new SockJS(this.reservationUrl + 'reservation-ws');
    this.reservationStompClient = Stomp.over(ws);
    this.reservationStompClient.debug = null;
    const that = this;
    this.reservationStompClient.connect({}, function () {
      if (that.role != null) {
        if (that.role == 'ROLE_HOST') that.openReservationSocket();
        else if (that.role == 'ROLE_GUEST' && that.user.hostResponse)
          that.openGuestSocket();
      }
    });
  }

  openReservationSocket() {
    if (this.user.reservationRequest)
      this.reservationStompClient.subscribe(
        '/notification/reservation-created',
        (message: { body: any }) => {
          let r: ReservationDto = JSON.parse(message.body);
          this.reservationService.getStay(r.accommodationId).subscribe({
            next: (data) => {
              let stay: Stay = data;
              if (stay.ownerId == this.id)
                this.toast.success(
                  'A new reservation has been made.',
                  'New reservation'
                );
            },
            error: (error) => console.log(error),
          });
        }
      );

    if (this.user.reservationCanceled)
      this.reservationStompClient.subscribe(
        '/notification/reservation-cancelled',
        (message: { body: any }) => {
          let r: ReservationDto = JSON.parse(message.body);
          this.reservationService.getStay(r.accommodationId).subscribe({
            next: (data) => {
              let stay: Stay = data;
              if (stay.ownerId == this.id)
                this.toast.success(
                  'Reservation has been canceled.',
                  'Reservation canceled'
                );
            },
            error: (error) => console.log(error),
          });
        }
      );
  }

  openGuestSocket() {
    this.reservationStompClient.subscribe(
      '/notification/reservation-confirmed',
      (message: { body: any }) => {
        let r: ReservationDto = JSON.parse(message.body);
        if (this.id && r.guestId == this.id)
          this.toast.success(
            'The host has approved your reservation.',
            'Reservation approved'
          );
      }
    );

    this.reservationStompClient.subscribe(
      '/notification/reservation-rejected',
      (message: { body: any }) => {
        let r: ReservationDto = JSON.parse(message.body);
        if (this.id && r.guestId == this.id)
          this.toast.error(
            'The host has rejected your reservation.',
            'Reservation rejected'
          );
      }
    );
  }

  initializeReviewWebSocketConnection() {
    const ws = new SockJS(this.reviewUrl + 'review-ws');
    this.reviewStompClient = Stomp.over(ws);
    this.reviewStompClient.debug = null;
    const that = this;
    this.reviewStompClient.connect({}, function () {
      that.openReviewSocket();
    });
  }

  openReviewSocket() {
    if (this.user.accommodationReview)
      this.reviewStompClient.subscribe(
        '/notification/accommodation-review',
        (message: { body: any }) => {
          let r: StayReview = JSON.parse(message.body);
          this.reservationService.getStay(r.accommodationId).subscribe({
            next: (data) => {
              let stay: Stay = data;
              if (stay.ownerId == this.id)
                this.toast.success(
                  'A client has left a review for your accommodation - ' +
                    r.rating,
                  'Accommodation review'
                );
            },
            error: (error) => console.log(error),
          });
        }
      );

    if (this.user.hostReview)
      this.reviewStompClient.subscribe(
        '/notification/host-review',
        (message: { body: any }) => {
          let r: HostReview = JSON.parse(message.body);
          if (r.hostId == this.id)
            this.toast.success(
              'A client has left a review for you - ' + r.rating,
              'Host review'
            );
        }
      );
  }
}
