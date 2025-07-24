import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    if (this.auth.isLoggedIn()) {
      return true;
    } else {
      const targetRoute = route.routeConfig?.path;
      let message = 'You must be logged in to access this page.';

      if (targetRoute === 'payments') {
        message = 'You must be logged in to access the payment page.';
      } else if (targetRoute === 'order-confirmation') {
        message = 'You must be logged in to access the order-confirmation page.';
      }

      alert(message);
      this.router.navigate(['/signin']);
      return false;
    }
  }
} 
 