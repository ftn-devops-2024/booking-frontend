import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Stay } from '../model/stay';
import { HostReview, StayReview } from '../model/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private _http: HttpClient) {}

  url = environment.review_service_url + 'reviews';

  hostReview(info: HostReview) {
    return this._http.post<any>(`${this.url}/host`, info);
  }

  stayReview(info: StayReview) {
    return this._http.post<any>(`${this.url}/accommodation`, info);
  }

  getHostReviews(id:string){
    return this._http.get<any>(`${this.url}/host/`+id);
  }

  getStayReviews(id:string){
    return this._http.get<any>(`${this.url}/accommodation/`+id);
  }

  getHostAverageGrade(id: string) {
    return this._http.get<any>(`${this.url}/host/average/`+id);
  }

  getStayAverageGrade(id: string) {
    return this._http.get<any>(`${this.url}/accommodation/average/`+id);
  }

  getUserHostReview(userId: string,hostId: string) {
    return this._http.post<any>(`${this.url}/host/user`,{'userId':userId,'hostId':hostId});
  }

  getUserAccommodationReview(userId: string,accommodationId: number) {
    return this._http.post<any>(`${this.url}/accommodation/user`,{'userId':userId,'accommodationId':accommodationId});
  }

  deleteStayReview(reviewId: number) {
    return this._http.delete<any>(`${this.url}/accommodation/`+reviewId);
  }

  deleteHostReview(reviewId: number) {
    return this._http.delete<any>(`${this.url}/host/`+reviewId);
  }

}
