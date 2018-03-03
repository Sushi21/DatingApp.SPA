import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService, private altertify: AlertifyService) { }

  ngOnInit() {

  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      this.altertify.sucess('login successfully');
    }, error => {
      this.altertify.error(error);
    });
  }

  logout() {
    this.authService.userToken = null;
    localStorage.removeItem('token');
    this.altertify.message('logged out');
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

}
