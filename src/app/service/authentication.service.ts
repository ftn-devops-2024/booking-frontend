import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {LoginInfo, User} from "../model/user";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _http: HttpClient) { }

  url = environment.authentication_service_url + 'api/auth';

  registerUser(client: User) {
    const newUrl = this.url + '/register';
    return this._http.post<any>(newUrl, client);
  }

  loginUser(loginInfo: LoginInfo) {
    const newUrl = this.url + '/login';
    return this._http.post<any>(newUrl, loginInfo);
  }}
