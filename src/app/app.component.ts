import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { LoginAfterPage } from '../pages/login-after/login-after';
import { QrPage } from '../pages/qr/qr';
import { SessionService } from '../services/session.service';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  
  rootPage:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, sessionS:SessionService) {
    platform.ready().then(() => {
      if (sessionS.getObject('user')) {
        this.rootPage = TabsPage;
      }else {
        this.rootPage = LoginPage;
      }
      
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      
    });
  }
}

