import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../_services/index';

@Component({
  templateUrl: 'app/login/login.component.html'
})

export class LoginComponent implements OnInit {
  @Output() loggingIn = new EventEmitter<boolean>();
  model: any = {};
  loading = false;
  error = '';

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  signUp() {
    this.router.navigate(['/signup']);
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(result => {
      if (result === true) {
        this.loggingIn.emit(true);
        this.router.navigate(['/']);
      } else {
        this.error = 'Username or password is incorrect';
        this.loading = false;
      }
    });
  }

  authenticate(type) {
    if (type === 'google') {

    }
  }
}
