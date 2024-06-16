import { Component } from '@angular/core';
import {FormGroup, FormsModule} from "@angular/forms";
import {MatCardContent} from "@angular/material/card";
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {LoginInfo, User} from "../../model/user";
import {CommonModule} from "@angular/common";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-login-registration',
  standalone: true,
  imports: [
    MatCardContent,
    MatProgressSpinner,
    FormsModule,
    CommonModule
  ],
  templateUrl: './login-registration.component.html',
  styleUrl: './login-registration.component.scss'
})
export class LoginRegistrationComponent {
  showLogin: boolean = true;
  user: User = new User();
  loginInfo: LoginInfo = new LoginInfo();
  loginData: any;
  form: FormGroup = new FormGroup({});
  isRegistered: boolean = false;
  reenterPass: string = '';

  constructor(private authenticationService: AuthenticationService) {
  }

  registerClick() {
    this.showLogin = false;
  }

  loginUser(){
    this.authenticationService.loginUser(this.loginInfo).subscribe({
      next: data => {
        console.log(data);
        alert('Successfully logged in');
        sessionStorage.setItem('username', this.loginData.username);
        sessionStorage.setItem('role', this.loginData.role);
        sessionStorage.setItem('accessToken', this.loginData.accessToken);
        sessionStorage.setItem('expiresIn', this.loginData.expiresIn);
        },
      error: error => {console.log(error);},
    })
  }

  registerUser(){
    console.log(this.user)
    this.authenticationService.registerUser(this.user).subscribe({
      next: data => {
        console.log(data);
        alert('Successfully registered!');
      },
      error: error => {console.log(error);},
    })
  }

}
