import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AppComponent } from './app.component';
import {AppRoutingModule} from  './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CpayComponent } from './components/cpay/cpay.component';
import { LoginComponent } from './components/login/login.component';

import {TransectService} from './services/transect.service';
import {DropdownService} from './services/dropdown.service';
import {AuthenticationService} from './services/authentication.service';
import {AuthguardService} from './services/authguard.service';

@NgModule({ 
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CpayComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule
  ],
  providers: [TransectService,DropdownService,AuthenticationService,AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
