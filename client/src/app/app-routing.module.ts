import {RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import {HomeComponent} from './components/home/home.component';
import {CpayComponent} from './components/cpay/cpay.component';


const appRoutes: Routes =[
	{path: '', 
	component:HomeComponent},
	{path: 'cpaya',
	component:CpayComponent},
	{path: 'cpayc',
	component:CpayComponent},
	{path: 'cpayi',
	component:CpayComponent},
	{path: 'cpayd',
	component:CpayComponent}
]; 


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)], 
  providers: [],
  bootstrap: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }