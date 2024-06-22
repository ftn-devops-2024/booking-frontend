import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stay } from '../model/stay';
import { environment } from '../../environments/environment';
import { SearchStay } from '../model/searchStay';
import { Reservation, ReservationDTO } from '../model/reservation';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  constructor(private _http: HttpClient) {}

  url = environment.reservation_service_url;

  createStay(info: Stay) {
    return this._http.post<any>(`${this.url}accommodations`, info);
  }

  getStay(id: number) {
    return this._http.get<any>(`${this.url}accommodations/${id}`);
  }

  updateStay(info: Stay, id: String) {
    return this._http.put<any>(`${this.url}accommodations/${id}`, info);
  }

  getAllOwnersStays(ownerId: String) {
    return this._http.get<any>(`${this.url}accommodations/owner/${ownerId}`);
  }

  searchStays(search: SearchStay) {
    return this._http.post<any>(`${this.url}accommodations/search`, search);
  }

  createReservation(reservation: ReservationDTO) {
    return this._http.post<any>(`${this.url}reservations`, reservation);
  }

  approveReservation(reservationId: String) {
    return this._http.get<any>(
      `${this.url}reservations/${reservationId}/confirm`
    );
  }

  rejectReservation(reservationId: String) {
    return this._http.get<any>(
      `${this.url}reservations/reject/${reservationId}`
    );
  }

  deleteReservation(reservationId: String) {
    return this._http.delete<any>(`${this.url}reservations/${reservationId}`);
  }

  getAllReservations(userId: String) {
    return this._http.get<any>(`${this.url}reservations/user/${userId}`);
  }

  uploadImage(id: number, file: File) {
    const formData: FormData = new FormData();
    formData.append('file', file);

    return this._http.post(
      `${this.url}accommodations/${id}/uploadImage`,
      formData
    );
  }

  getUserStays(userId: string) {
    return this._http.get<any>(`${this.url}reservations/userStays/` + userId);
  }

  getUserHosts(userId: string) {
    return this._http.get<any>(`${this.url}reservations/userHosts/` + userId);
  }
}
