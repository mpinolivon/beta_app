import { Response, Headers, RequestOptions, Http } from '@angular/http';
import { Injectable } from '@angular/core';

import { map } from "rxjs/operators";
import { AppSettings } from "../../app/app.setting";

/*
  Generated class for the ServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServicesAuth {

  constructor(public http: Http) {
    console.log('Hello ServicesProvider Provider');
  }


  login(params){
    return this.http.post(AppSettings.BASE+AppSettings.LOGIN, params)
    .pipe(map(data => data.json()));
  };

  createuser(params){
    return this.http.post(AppSettings.BASE+AppSettings.CREATE_USER, params)
    .pipe(map(data => data.json()));
  }

}
