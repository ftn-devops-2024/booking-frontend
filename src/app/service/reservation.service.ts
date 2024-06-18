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


  createStay(info:Stay){
    return this._http.post<any>(`${this.url}/create`,info);
  }

  getStay(id:String){
    return this._http.get<any>(`${this.url}/${id}`);
  }

  updateStay(info:Stay){
    return this._http.post<any>(`${this.url}/update`,info);
  }

  getAllOwnersStays(ownerId:String){
    return this._http.get<any>(`${this.url}/${ownerId}`);
  }

  searchStays(search:SearchStay){
    return this._http.post<any>(`${this.url}/search`,search);
  }

  approveReservation(reservationId:String){
    return this._http.get<any>(`${this.url}/${reservationId}`);
  }

  deleteReservation(reservationId:String){
    return this._http.get<any>(`${this.url}/${reservationId}`);
  }
}
