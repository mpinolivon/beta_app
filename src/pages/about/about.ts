import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionService } from '../../services/session.service';
import { Events } from 'ionic-angular';
import { ServicesAuth } from '../../providers/services/services';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public listEvents:any;

  constructor(public navCtrl: NavController,public sessionS:SessionService, public events: Events, public services:ServicesAuth) {
    this.services.listEvents({'headers':{'Authorization':"Bearer" + " " + this.sessionS.getObject('answertoken').access_token}}).subscribe(response => {
      // this.sessionS.setObject('ListEvents',response.data)
      this.listEvents = response.data.data
      console.log(this.listEvents );
    }, error => {
      //alert('Usuario o contraseña incorrecto');
    })
  }

  // inscribe() {
  //   this.sessionS.setObject('paramInscrip','block')
  //   console.log('red')
  // }

  

  inscribe() {
    this.sessionS.setObject('paramInscrip','flex')
    this.events.publish('user:login');
  }
}

