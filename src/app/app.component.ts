import { Component } from '@angular/core';
import { Platform, AlertController, ModalController , LoadingController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LoginAfterPage } from '../pages/login-after/login-after';
import { QrPage } from '../pages/qr/qr';
import { ComentPage } from '../pages/coment/coment';
import { NotificationPage } from '../pages/notification/notification';

import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { ENV } from '../config/environment';
import { FCM } from '@ionic-native/fcm';
import { ServicesAuth } from '../providers/services/services';


import { SessionService } from '../services/session.service';

// (<any>Window).approve = function (data: any) {
//   console.log('1')
// };

// (<any>Window).reject = function (data: any) {
//   console.log('2')
// };

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  // public approve = function (data: any) {
  //   console.log('1,'  + data)
  // };
  
  // public reject = function (data: any) {
  //   console.log('2,'  + data)
  // }
  
  public notificacion:any;
  rootPage:any;
  

  public  loading = this.loadingCtrl.create({
    content: ''
  });
  constructor(public loadingCtrl: LoadingController,public modalCtrl: ModalController,public services:ServicesAuth ,private fcm: FCM,private alertCtrl: AlertController,private push: Push,public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public sessionS:SessionService) {
    platform.ready().then(() => {
      if (this.sessionS.getObject('user')) {
        this.rootPage = TabsPage;
        

      }else {
        this.rootPage = LoginPage;
      }
       
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.fcm.onNotification().subscribe(data => {
        console.log('data notificación => ', data)
      });

      this.notification();
    });
  }



  notification(){
    
    const options: PushOptions = ENV.pushFB.PushOptions;     
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => {
      this.notificacion = notification;
      console.log(this.notificacion)
      this.sessionS.setObject('notification',notification)
      let profileModal = this.modalCtrl.create(NotificationPage);
      profileModal.present();
      console.log('Received a notification', notification)
    });

    pushObject.on('approve').subscribe((notification: any) => {
      this.loading.present()
      this.notificacion = notification;
      let header = {'headers':{
          'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
        }
      }
      this.services.aceptNotification(header, notification.additionalData.event).subscribe(response => {
        console.log(response,'servicio1')
        this.loading.dismiss()
        this.platform.exitApp();
      }, error => {
        //alert('Usuario o contraseña incorrecto');
      })
  
      console.log(this.notificacion)
      console.log('1 approve');
    });

    pushObject.on('reject').subscribe((notification: any) => {
      this.loading.present()
      this.notificacion = notification;
      let header = {'headers':{
        'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
      }
    }
      this.services.denegadoNotification(header, notification.additionalData.event).subscribe(response => {
        console.log(response,'servicio2')
        this.loading.dismiss()
        this.platform.exitApp();
      }, error => {
        //alert('Usuario o contraseña incorrecto');
      })
      console.log(this.notificacion)
      console.log('2 reject');
    });
   
    pushObject.on('registration').subscribe((registration: any) => {         
      this.sessionS.setObject('device', registration.registrationId);
    });     
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));    
}



}

