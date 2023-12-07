import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);
  private authService = inject(AuthService);
  private router = inject(Router);
  isUserLoggedIn = false;
  isAdminLoggedIn = false;

  ngOnInit(): void {
    this.authService.userLoginStatus.subscribe((status) => {
      this.isUserLoggedIn = status;
    });

    this.authService.adminLoginStatus.subscribe((status) => {
      this.isAdminLoggedIn = status;
    });
  }

  logOut(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }

  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result: { matches: any }) => result.matches),
      shareReplay()
    );
}
