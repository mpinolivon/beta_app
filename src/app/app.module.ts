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
import { QrPage } from '../pages/qr/qr';
import { ComentPage } from '../pages/coment/coment';
import { NotificationPage } from '../pages/notification/notification';



import { HttpModule, Headers, RequestOptions, Http } from '@angular/http';

import { SessionService } from '../services/session.service';

import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner'
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServicesAuth } from '../providers/services/services';
import { HttpClientModule } from '@angular/common/http';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LinkedIn } from '@ionic-native/linkedin';
import { Push } from '@ionic-native/push';
import { FCM } from '@ionic-native/fcm';



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
    QrPage,
    ComentPage,
    NotificationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule,
    HttpClientModule,
    HttpModule,
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
    ReadingInternalPage,
    QrPage,
    ComentPage,
    NotificationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SessionService,
    BarcodeScanner,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServicesAuth,
    SocialSharing,
    LinkedIn,
    Push,
    FCM,
  ]
})
export class AppModule {}
