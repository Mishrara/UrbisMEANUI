import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DropdownService {
  domain = "http://localhost:3000";
  constructor(
    private http:Http
  ) { }
  getDropDown(dropdown){
    var headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.get(this.domain + "/dropdown/" + dropdown,{headers:headers}).map(data => {
      data.json();
      return data.json();
    });;
  }
}
