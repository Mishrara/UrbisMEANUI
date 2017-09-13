import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TransectService {
domain = "http://localhost:3030";
  constructor(
    private http:Http
  ) { }
  transectAdd(CPAY){
    return this.http.post(this.domain + "/api/cpay",CPAY).map(res=>res.json());
  }
}
