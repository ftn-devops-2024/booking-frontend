import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../service/user.service';
import { ToastrService } from 'ngx-toastr';
import { WebsocketService } from '../../service/websocket.service';

@Component({
  selector: 'app-edit-profile',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './edit-profile.component.html',
  styleUrl: './edit-profile.component.scss',
})
export class EditProfileComponent implements OnInit {
  user: User = new User();
  id: string | null = sessionStorage.getItem('id');

  constructor(
    private userService: UserService,
    private toastr: ToastrService,
    private webSocketService: WebsocketService
  ) {}

  ngOnInit() {
    //dobavi korisnika ili ga vec imamo
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
    // this.user = new User("Pera","Peric","pera@gmail.com","pera123","Cuprija");
  }

  editUser(deleting: boolean) {
    this.userService.editUser(this.user).subscribe({
      next: (data) => {
        if (deleting) {
          this.toastr.success('Success!', 'Successfully deleted!');
          sessionStorage.clear();
          window.location.href = '/';
        } else {
          this.toastr.success('Success!', 'Successfully edited!');
        }
        console.log(data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  deleteUser() {
    this.user.deleted = true;
    this.editUser(true);
  }
}
