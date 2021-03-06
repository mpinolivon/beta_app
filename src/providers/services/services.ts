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

  listEvents(params){
    return this.http.get(AppSettings.BASE+AppSettings.EVENTS, params)
    .pipe(map(data => data.json()));
  }

  listEventsHistory(params){
    return this.http.get(AppSettings.BASE+AppSettings.EVENTSHISTORY, params)
    .pipe(map(data => data.json()));
  }

  
inscribedEvent(header,params){
    return this.http.post(AppSettings.BASE+AppSettings.INSCRIBED, header,params)
    .pipe(map(data => data.json()));
  }

  user(header){
    return this.http.get(AppSettings.BASE+AppSettings.USER + 0, header)
    .pipe(map(data => data.json()));
  }

  userResend(id){
    return this.http.get(AppSettings.BASE+AppSettings.USER + id + '/resend')
    .pipe(map(data => data.json()));
  }

  like(header,params){
    return this.http.post(AppSettings.BASE+AppSettings.LIKE , header , params)
    .pipe(map(data => data.json()));
  }

  sendComent(header,params) {
    return this.http.post(AppSettings.BASE+AppSettings.SENDCOMENT , header , params)
    .pipe(map(data => data.json()));
  }

  listComent(header, id){
    return this.http.get(AppSettings.BASE+AppSettings.LISTCOMENT + id, header)
    .pipe(map(data => data.json()));
  }
  

  updateIdDevice(header,params) {
    return this.http.post(AppSettings.BASE+AppSettings.IDDEVICE , header , params)
    .pipe(map(data => data.json()));
  }

  aceptNotification(header,id) {
    return this.http.get(AppSettings.BASE+AppSettings.NOTIFICATION1 + id , header)
    .pipe(map(data => data.json()));
  }

  denegadoNotification(header,id) {
    return this.http.get(AppSettings.BASE+AppSettings.NOTIFICATION2 + id , header)
    .pipe(map(data => data.json()));
  }

}
