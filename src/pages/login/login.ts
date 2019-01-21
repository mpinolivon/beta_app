import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { LoginAfterPage } from '../login-after/login-after';
import { SessionService } from '../../services/session.service';
import { LinkedIn } from '@ionic-native/linkedin';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  public selfData = { id:"", firstName:"", lastName:"", email:"" };
  public isLoggedIn= true;
  public hola = '1';

  constructor(private alertCtrl: AlertController,private linkedin: LinkedIn,public navCtrl: NavController, public navParams: NavParams, public sessionS:SessionService) {
  }

  ionViewDidLoad() {
  //   this.linkedin.hasActiveSession().then((active) => {
  //     this.isLoggedIn = active;
  //     if(this.isLoggedIn === true) {
  //         this.getSelfData();
  //     }
  // });
  this.hola = this.sessionS.getObject('device')
    console.log('ionViewDidLoad LoginPage');
  }

  loginLinkedin(){
    let scopes:any = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];   
   this.linkedin.login(scopes, true).then((res) => {
    this.hola = '2';
      this.getSelfData();
      this.isLoggedIn = true;
      this.hola = '3';
        console.log(res) ;
    }, (err) => {
        console.log(err) ;
        this.hola = err;
    });
  
  }

  getSelfData() {
    this.linkedin.getRequest('people/~')
        .then(res => {
            this.selfData = res;
        })
        .catch(e => console.log(e));
}


  loginPage(index){
    this.sessionS.setObject('login',index)
    this.navCtrl.push(LoginAfterPage)
  }

}
