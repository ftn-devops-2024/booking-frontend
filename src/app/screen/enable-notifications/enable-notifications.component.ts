import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {FormsModule} from "@angular/forms";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-enable-notifications',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './enable-notifications.component.html',
  styleUrl: './enable-notifications.component.scss'
})
export class EnableNotificationsComponent implements OnInit{
  user: User = new User();
  id: string | null = sessionStorage.getItem('id');

  constructor(private userService: UserService) {}

  ngOnInit() {
    if (this.id)
      this.userService.getUser(this.id).subscribe({
        next: (data) => {
          console.log(data);
          this.user = data;
        },
        error: (error) => {
          console.log(error);
        },
      });
  }

  editUser() {
    console.log(this.user)
    this.userService.editUser(this.user).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
