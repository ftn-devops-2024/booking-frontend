import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../model/user";
import {ReservationService} from "../../service/reservation.service";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss'
})
export class EditProfileComponent implements OnInit{
  user: User = new User();

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    //dobavi korisnika ili ga vec imamo
    this.userService.getUser('12').subscribe({
      next: data => {console.log(data);},
      error: error => {console.log(error);},
    })
    this.user = new User("Pera","Peric","pera@gmail.com","pera123","Cuprija");
  }

  editUser(){
    this.userService.editUser(this.user).subscribe({
      next:(data)=>console.log(data),
      error:error => {console.log(error);},
    })
  }

}
