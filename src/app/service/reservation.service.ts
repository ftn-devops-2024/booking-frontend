import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Stay} from "../model/stay";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private _http: HttpClient) { }

  url = environment.reservation_service_url;

  createStay(info:Stay){
    return this._http.post<any>(`${this.url}/create`,info, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        //'Access-Control-Allow-Origin': '*',
      }),
    });

  }
}
