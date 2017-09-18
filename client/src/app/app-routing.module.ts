import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {CpayComponent} from './components/cpay/cpay.component';
import { LoginComponent } from './components/login/login.component';
import {AuthguardService} from './services/authguard.service';


const appRoutes: Routes =[
	{path: '', 
	component:HomeComponent, },
	{path: 'cpaya',
	component:CpayComponent, canActivate:[AuthguardService]},
	{path: 'cpayc',
	component:CpayComponent, canActivate:[AuthguardService]},
	{path: 'cpayi',
	component:CpayComponent, canActivate:[AuthguardService]},
	{path: 'cpayd',
	component:CpayComponent, canActivate:[AuthguardService]},
	{path: 'login', 
	component: LoginComponent} 
]; 


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)], 
  providers: [AuthguardService],
  bootstrap: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }