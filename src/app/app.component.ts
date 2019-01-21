import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LoginAfterPage } from '../pages/login-after/login-after';
import { QrPage } from '../pages/qr/qr';
import { ComentPage } from '../pages/coment/coment';
import { Push, PushObject, PushOptions } from '@ionic-native/push';
import { ENV } from '../config/environment';

import { SessionService } from '../services/session.service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any;

  constructor(private push: Push, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public sessionS:SessionService) {
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
      this.hola();
    });
  }

  hola(){
    
    const options: PushOptions = ENV.pushFB.PushOptions;     
    const pushObject: PushObject = this.push.init(options);
    pushObject.on('notification').subscribe((notification: any) => {});
    pushObject.on('registration').subscribe((registration: any) => {         
      this.sessionS.setObject('device', registration.registrationId);
    });     
    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));    
}
}

