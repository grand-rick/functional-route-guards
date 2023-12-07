import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  isLoggedIn = false;
  isAdmin = false;
  userLoginStatus = new BehaviorSubject<boolean>(this.hasUserAccess());
  adminLoginStatus = new BehaviorSubject<boolean>(this.hasAdminAccess());

  login(userDetails: { email: string; password: string }): boolean {
    const { email, password } = userDetails;

    if (email === 'admin@gmail.com' && password === 'Admin') {
      this.isAdmin = true;
      this.isLoggedIn = true;
      this.userLoginStatus.next(this.isLoggedIn);
      this.adminLoginStatus.next(this.isAdmin);
    } else if (email === 'user@gmail.com' && password === 'User') {
      this.isLoggedIn = true;
      this.isAdmin = false;
      this.userLoginStatus.next(this.isLoggedIn);
      this.adminLoginStatus.next(this.isAdmin);
    }
    return this.isLoggedIn;
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.userLoginStatus.next(this.isLoggedIn);
    this.adminLoginStatus.next(this.isAdmin);
  }

  hasUserAccess(): boolean {
    return this.isLoggedIn;
  }

  hasAdminAccess(): boolean {
    return this.isAdmin;
  }
}
