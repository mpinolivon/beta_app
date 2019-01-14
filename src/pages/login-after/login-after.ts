import { Component, Testability } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController , LoadingController, AlertController} from 'ionic-angular';
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
    public loginservice: ServicesAuth, 
    public loadingCtrl: LoadingController,
    private alertCtrl: AlertController)
    
    {
  }

  public loginSession = this.sessionS.getObject('login');
  public  loading = this.loadingCtrl.create({
    content: ''
  });




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
    this.loading.present()
    if(emailvalidate.test(String(this.userparameters.username).toLowerCase())){
      this.loginservice.login(this.userparameters)
      .subscribe(response => {
        console.log(response);
        this.sessionS.setObject('answertoken', response);
        var header = {'headers':{'Authorization': response.token_type + " " + response.access_token}}
        this.loginservice.user(header).subscribe(response => {
          console.log(response)
          var idUser = response.data.id;
          console.log(idUser)
          this.loading.dismiss()
          if (response.data.email_verified_at == null) {
            let alert = this.alertCtrl.create({
              title: 'Confirmar Correo',
              message: 'Todavía no validas tu correo',
              buttons: [
                {
                  text: 'Ok',
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  }
                },
                {
                  text: 'Reenviar Correo',
                  handler: () => {
                    this.loginservice.userResend(idUser).subscribe(response => {
                      
                    })
                  }
                }
              ]
            });
            alert.present();
          }else{
            this.navCtrl.setRoot(TabsPage);
            this.sessionS.setObject('user', response);

          }
          console.log(response)
        })
        //
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
          
          let alert = this.alertCtrl.create({
            title: 'Confirma por Correo',
            subTitle: 'Te mandamos un correo para que valides tu cuenta',
            buttons: ['Ok']
          });
          this.loading.present();
          this.loginSession = 0;
          alert.present();
          this.loginservice.createuser(this.usernewparameters)
          .subscribe(response => {
            this.loading.dismiss();
            console.log('se creo el usuario y esta es la data que devuelve el gorfo',response);
            this.userparameters.username = response.data.email;
            this.userparameters.password = this.usernewparameters.password;
            //this.login()
          },error => {
            //alert('Usuario o contraseña incorrecto');
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
