import {Component, OnInit} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {User} from "../../model/user";

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

  ngOnInit() {
    //dobavi korisnika ili ga vec imamo
    this.user = new User("Pera","Peric","pera@gmail.com","pera123","Cuprija");
  }

}
