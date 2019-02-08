import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, LoadingController } from 'ionic-angular';
import { ServicesAuth } from '../../providers/services/services';


import { SessionService } from '../../services/session.service';

/**
 * Generated class for the NotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {
  public notification ;
  constructor(public loadingCtrl: LoadingController,public platform:Platform,public services:ServicesAuth,public sessionS:SessionService,public navCtrl: NavController, public navParams: NavParams) {
  }

  public  loading = this.loadingCtrl.create({
    content: ''
  });

  ionViewDidLoad() {
    this.notification = this.sessionS.getObject('notification')
    console.log('ionViewDidLoad NotificationPage');
  }

  noIr(){
    this.loading.present()
    let header = {'headers':{
      'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
    }
  }
    this.services.denegadoNotification(header,this.notification.additionalData.event).subscribe(response => {
      console.log(response,'no')
      this.loading.dismiss()
      this.platform.exitApp();
    }, error => {
      //alert('Usuario o contraseña incorrecto');
    })
    console.log('dasd222ad')
  }

  ir(){
    this.loading.present()
    let header = {'headers':{
        'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
      }
    }

    this.services.aceptNotification(header,this.notification.additionalData.event).subscribe(response => {
      console.log(response,'si')
      this.loading.dismiss()
      this.platform.exitApp();
    }, error => {
      //alert('Usuario o contraseña incorrecto');
    })
    console.log('dasdad')
  }
}
