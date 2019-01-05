import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ReadingPage } from '../pages/reading/reading';
import { LoginPage } from '../pages/login/login';
import { LoginAfterPage } from '../pages/login-after/login-after';
import { ReadingInternalPage } from '../pages/reading-internal/reading-internal';



import { SessionService } from '../services/session.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ReadingPage,
    LoginPage,
    LoginAfterPage,
    ReadingInternalPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ReadingPage,
    LoginPage,
    LoginAfterPage,
    ReadingInternalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SessionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
