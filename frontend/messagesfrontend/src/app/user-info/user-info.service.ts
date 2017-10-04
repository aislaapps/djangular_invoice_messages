import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { UserInfo } from "../models/user-info";

@Injectable()
export class UserInfoService {

  private apiURI='messages/userid/';
  constructor( private http: Http) { }

  public getUserInfo(): Observable<UserInfo>{
      return this.http
                .get(this.apiURI)
                .map((resp: Response) => resp.json());
  }

}
