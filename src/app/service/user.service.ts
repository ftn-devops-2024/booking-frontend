import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Stay} from "../model/stay";
import {User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: HttpClient) { }

  url = environment.authentication_service_url + 'api/user';

  getUser(userId:string){
    return this._http.get<any>(`${this.url}/${userId}`);
  }

  editUser(info:User){
    return this._http.post<any>(`${this.url}/`,info);
  }
}
