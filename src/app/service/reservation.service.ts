import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stay } from '../model/stay';
import { environment } from '../../environments/environment';
import { SearchStay } from '../model/searchStay';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private _http: HttpClient) {}

  url = environment.reservation_service_url;

  createStay(info: Stay) {
    return this._http.post<any>(`${this.url}accommodations`, info);
  }

  getStay(id: String) {
    return this._http.get<any>(`${this.url}accommodations/${id}`);
  }

  updateStay(info: Stay, id: String) {
    return this._http.put<any>(`${this.url}accommodations/${id}`, info);
  }

  getAllOwnersStays(ownerId: String) {
    return this._http.get<any>(`${this.url}${ownerId}`);
  }

  searchStays(search: SearchStay) {
    return this._http.post<any>(`${this.url}search`, search);
  }

  approveReservation(reservationId: String) {
    return this._http.get<any>(`${this.url}${reservationId}`);
  }

  deleteReservation(reservationId: String) {
    return this._http.get<any>(`${this.url}${reservationId}`);
  }

  getAllReservations(userId: String) {
    return this._http.get<any>(`${this.url}/${userId}`);
  }
}
