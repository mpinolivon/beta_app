import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SessionService } from '../../services/session.service';
import { Events } from 'ionic-angular';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController,public sessionS:SessionService, public events: Events) {

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

