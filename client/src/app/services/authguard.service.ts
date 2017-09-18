import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthguardService implements CanActivate{
   constructor(
    private authService: AuthenticationService,
    private router: Router
    ) { 

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.authService.loggedIn()){
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}

