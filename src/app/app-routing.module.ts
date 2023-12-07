import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './main/admin/admin.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { LoginComponent } from './main/login/login.component';
import { loginGuard } from './guards/login.guard';
import { contactGuard } from './guards/contact.guard';
import { NotFoundComponent } from './main/not-found/not-found.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, canActivate: [loginGuard] },
  {
    path: 'contact',
    component: ContactComponent,
    canDeactivate: [contactGuard],
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./main/products/products.module').then((m) => m.ProductsModule),
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
