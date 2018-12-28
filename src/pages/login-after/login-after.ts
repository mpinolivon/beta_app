import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SessionService } from '../../services/session.service';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the LoginAfterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-after',
  templateUrl: 'login-after.html',
})
export class LoginAfterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public sessionS:SessionService, public viewCtrl: ViewController) {
  }

  public loginSession = this.sessionS.getObject('login');


  ionViewDidLoad() {
    console.log(this.loginSession)
    console.log('ionViewDidLoad LoginAfterPage');
  }

  goBack(){
    this.viewCtrl.dismiss();
  }

  goHome(){
    this.navCtrl.setRoot(TabsPage)
    console.log('asdasd')
  }

}
