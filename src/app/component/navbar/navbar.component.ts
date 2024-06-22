import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  role: string | null = sessionStorage.getItem('role');

  ngOnInit(): void {
    this.role = sessionStorage.getItem('role');
  }

  logout() {
    sessionStorage.clear();
    window.location.href = '/';
  }
}
