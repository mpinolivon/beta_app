import { Component } from '@angular/core';
import { NavController , AlertController, LoadingController} from 'ionic-angular';
import { SessionService } from '../../services/session.service';
import { Events } from 'ionic-angular';
import { ServicesAuth } from '../../providers/services/services';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public listEvents:any;

  constructor(public loadingCtrl: LoadingController,private alertCtrl: AlertController,public navCtrl: NavController,public sessionS:SessionService, public events: Events, public services:ServicesAuth) {
    this.services.listEvents({'headers':{'Authorization':"Bearer" + " " + this.sessionS.getObject('answertoken').access_token}}).subscribe(response => {
      // this.sessionS.setObject('ListEvents',response.data)
      this.listEvents = response.data.data
      console.log(this.listEvents );
    }, error => {
      //alert('Usuario o contraseña incorrecto');
    })
  }

  // inscribe() {
  //   this.sessionS.setObject('paramInscrip','block')
  //   console.log('red')
  // }

  
  inscribeDelete(events) {
    let alert = this.alertCtrl.create({
      title: '¿Esta seguro que no podras asistir?',
      message: 'No podras inscribirte de nuevo a este programa',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Acepto',
          handler: () => {
            var body = {'event': events.id,'type':'DELETE'};
            var header = {'headers':{'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token}}
            console.log(events)
            this.services.inscribedEvent(body,header).subscribe(response => {
              events.enrolled = response.data.status;
              //console.log()
            }, error => {
              //alert('Usuario o contraseña incorrecto');
            })
          }
        }
      ]
    });
    alert.present();
  }

  inscribe(events) {
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    var body = {'event': events.id};
    var header = {'headers':{'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token}}
    console.log(events)
    // events.enrolled = 1;
    this.sessionS.setObject('paramInscrip','flex')
    this.services.inscribedEvent(body,header).subscribe(response => {
      loading.dismiss();
      if (response.data.status == 1) {
        this.events.publish('user:login');
      }
      events.enrolled = response.data.status;
    }, error => {
      //alert('Usuario o contraseña incorrecto');
    })
  }
}

