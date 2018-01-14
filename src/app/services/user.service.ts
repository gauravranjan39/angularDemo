import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import "rxjs/add/Operator/catch";

@Injectable()
export class UserService {

  private url = "http://localhost/poc";

  constructor(private http:HttpClient) { }

  register (postBody): Observable<any> {
    return this.http
    .post (this.url+ "/users", postBody)
    // .catch(err => {
    //   console.log(err, "Error");
    // });
  }
}
