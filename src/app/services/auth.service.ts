import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn = false;
  loginStatus = new BehaviorSubject<boolean>(this.hasAccess());

  login(userDetails: { email: string; password: string }): boolean {
    const { email, password } = userDetails;
    if (email === 'user@gmail.com' && password === 'User') {
      this.isLoggedIn = true;
      this.loginStatus.next(this.isLoggedIn);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.loginStatus.next(this.isLoggedIn);
  }

  hasAccess(): boolean {
    return this.isLoggedIn;
  }
}
