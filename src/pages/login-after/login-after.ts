import { Component, Testability } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SessionService } from '../../services/session.service';
import { TabsPage } from '../../pages/tabs/tabs';
import { ServicesAuth } from '../../providers/services/services';
import { ExpressionStatement } from '@angular/compiler';


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

  public userparameters = {
    'username': '',
    'password': '',
    'grant_type' : 'password',
    'client_id' : 2,
    'client_secret': 'MQsvB02KsbukQZUWIFFqlDarEOvKAMm4C5tJuaEc',
  }

  public usernewparameters = {
    'name': '',
    'lastname': '',
    'email': '',
    'password': '',
    'device': '65465123',    
    'password_confirmation': '',
    'method' : 'put',
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public sessionS:SessionService, 
    public viewCtrl: ViewController,
    public loginservice: ServicesAuth, )
    
    {
  }

  public loginSession = this.sessionS.getObject('login');





  ionViewDidLoad() {
    console.log(this.loginSession)
    console.log('ionViewDidLoad LoginAfterPage');
  }

  goBack(){
    this.viewCtrl.dismiss();
  }

  login(){
    var emailvalidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!this.userparameters.username || !this.userparameters.password){
      alert('Falta llenar usuario o contraseña');
      return;
    }
    if(emailvalidate.test(String(this.userparameters.username).toLowerCase())){
      this.loginservice.login(this.userparameters)
      .subscribe(response => {
        console.log(response);
        this.sessionS.setObject('answertoken', response);
        this.navCtrl.setRoot(TabsPage);
      }, error => {
        alert('Usuario o contraseña incorrecto');
      })
    }
    else{
      console.log('asdasd');
      // alert('Correo no válido');
    }      

  }

  createuser(){
    var emailvalidate = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!this.usernewparameters.name || !this.usernewparameters.lastname || !this.usernewparameters.email || !this.usernewparameters.password || !this.usernewparameters.password_confirmation) {
      alert('Verificar campos');
      return;
    }
    if(emailvalidate.test(String(this.usernewparameters.email).toLowerCase())){
        if (this.usernewparameters.password === this.usernewparameters.password_confirmation) { 
          this.loginservice.createuser(this.usernewparameters)
          .subscribe(response => {
            console.log('se creo el usuario y esta es la data que devuelve el gorfo',response);
            this.userparameters.username = response.data.email;
            this.userparameters.password = this.usernewparameters.password;
            this.login()
          },error => {
            alert('Usuario o contraseña incorrecto');
          }
          )}
        else{
          alert('Verificar Contraseña');
        }
    }
    else{
      console.log('hola');
      alert('Correo no válido');
    }
  }
}
