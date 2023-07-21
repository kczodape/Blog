import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Promise<boolean> {
    return Auth.currentAuthenticatedUser()
      .then(() => true)
      .catch(() => {
        this.router.navigate(['/sign-in']); // Redirect to the login page if not authenticated
        return false;
      });
  }
}
