import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import {AppRoutingModule} from  './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CpayComponent } from './components/cpay/cpay.component';
import {TransectService} from './services/transect.service';
import {DropdownService} from './services/dropdown.service';

@NgModule({ 
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CpayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [TransectService,DropdownService],
  bootstrap: [AppComponent]
})
export class AppModule { }
