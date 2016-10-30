import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  templateUrl: 'app/home/welcome.component.html'
})

export class WelcomeComponent implements OnInit {
  users: User[] = [];
  user: User;
  token: String = JSON.parse(localStorage.getItem('currentUser')).token;

  constructor(private userService: UserService) {
    this.user = userService.getUser();
  }

  ngOnInit() {
  }
}
