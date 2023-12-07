import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import materialModules from './shared/shared.module';

import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { ContactComponent } from './main/contact/contact.component';
import { AdminComponent } from './main/admin/admin.component';
import { LoginComponent } from './main/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './main/not-found/not-found.component';

const main = [
  AppComponent,
  NavComponent,
  HomeComponent,
  AboutComponent,
  ContactComponent,
  AdminComponent,
  LoginComponent,
];
@NgModule({
  declarations: [main, NotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    materialModules,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
