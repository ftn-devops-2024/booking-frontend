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
    return this._http.post<any>(`${this.url}`, info, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  getStay(id: String) {
    return this._http.get<any>(`${this.url}/${id}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  updateStay(info: Stay) {
    return this._http.put<any>(`${this.url}/1`, info, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  getAllOwnersStays(ownerId: String) {
    return this._http.get<any>(`${this.url}/${ownerId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  searchStays(search: SearchStay) {
    return this._http.post<any>(`${this.url}/search`, search, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  approveReservation(reservationId: String) {
    return this._http.get<any>(`${this.url}/${reservationId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
      }),
    });
  }

  deleteReservation(reservationId: String) {
    return this._http.get<any>(`${this.url}/${reservationId}`, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
      }),
    });
  }
}
