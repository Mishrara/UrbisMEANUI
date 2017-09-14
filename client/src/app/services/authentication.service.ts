import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import {tokenNotExpired} from 'angular2-jwt';
 
@Injectable()
export class AuthenticationService {
  authToken: any
  domain = "http://localhost:3000";
    constructor(private http: Http) {} 

authenticateUser(login){
  var headers = new Headers();
  headers.append('Content-Type', 'application/json');
  return this.http.post(this.domain + '/users/authenticate',login).map(response =>response.json());
  }
 
storeUserData(token){
  localStorage.setItem('token',token);
  this.authToken = token;
  }
  loadToken(){
    const token = localStorage.getItem('token');
  }

  loggedIn(){
    //console.log(tokenNotExpired('id_token'));
    return tokenNotExpired();
  }
logout(){
  this.authToken = null;
  localStorage.clear();
  }
}