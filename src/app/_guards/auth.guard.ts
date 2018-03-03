import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
// Guard making sure we protect routes by injecting our Auth Service
// User has to be logged in
// To generate guard template with Angular CLI
// ng g guard auth --spec=false
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private altertify: AlertifyService) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.altertify.error('You need to be logged in to access this area');
    this.router.navigate(['/home']);
    return false;
  }
}
