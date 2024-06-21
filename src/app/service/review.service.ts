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

  getStays(userId: string) {
    return this._http.get<any>(`${this.url}/` + userId);
  }

  getHosts(userId: string) {
    return this._http.get<any>(`${this.url}/` + userId);
  }
}
