import { Component } from '@angular/core';
import { NavController , AlertController, LoadingController, ModalController} from 'ionic-angular';
import { SessionService } from '../../services/session.service';
import { Events } from 'ionic-angular';
import { ServicesAuth } from '../../providers/services/services';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ComentPage } from '../../pages/coment/coment';



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  public listEvents:any;
  public segmentos = "events"

  constructor(public modalCtrl: ModalController,private socialSharing: SocialSharing,public loadingCtrl: LoadingController,private alertCtrl: AlertController,public navCtrl: NavController,public sessionS:SessionService, public events: Events, public services:ServicesAuth) {
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    this.services.listEventsHistory({'headers':{'Authorization':"Bearer" + " " + this.sessionS.getObject('answertoken').access_token}}).subscribe(response => {
      // this.sessionS.setObject('ListEvents',response.data)
      this.listEvents = response.data.data;
      loading.dismiss();
      console.log(this.listEvents );
    }, error => {
      //alert('Usuario o contraseña incorrecto');
    })
  }

  // inscribe() {
  //   this.sessionS.setObject('paramInscrip','block')
  //   console.log('red')
  // }

  changeTileType(){
    if (this.segmentos == "history") {
      let loading = this.loadingCtrl.create({
        content: ''
      });
      loading.present();
      this.services.listEvents({'headers':{'Authorization':"Bearer" + " " + this.sessionS.getObject('answertoken').access_token}}).subscribe(response => {
        // this.sessionS.setObject('ListEvents',response.data)
        this.listEvents = response.data.data;
        loading.dismiss();
        console.log(this.listEvents );
      }, error => {
        //alert('Usuario o contraseña incorrecto');
      })
    } else {
      let loading = this.loadingCtrl.create({
        content: ''
      });
      loading.present();
      this.services.listEventsHistory({'headers':{'Authorization':"Bearer" + " " + this.sessionS.getObject('answertoken').access_token}}).subscribe(response => {
        // this.sessionS.setObject('ListEvents',response.data)
        this.listEvents = response.data.data;
        loading.dismiss();
        console.log(this.listEvents );
      }, error => {
        //alert('Usuario o contraseña incorrecto');
      })
    }
  }

  share(events){
    this.socialSharing.share(events.name + ',  ' +'en' + ' ' + events.address, '' , events.image, 'http://betaapp.atypax.com').then(() => {
      // Success!
    }).catch(() => {
      // Error!
    });
  }

  like(events){

    var body = {};
    if (events.liked == 1) {
      body = {'event': events.id,'status':0}
      events.liked = 0;
    } else {
      body = {'event': events.id,'status': 1}
      events.liked = 1;
    }
    var header = {'headers':{'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token}}
    this.services.like(body,header).subscribe(response => {
      console.log(response)
    }, error => {
                //alert('Usuario o contraseña incorrecto');
    })
    console.log()
  }

  coment(events){
    this.sessionS.setObject('event',events)
    let profileModal = this.modalCtrl.create(ComentPage);
   profileModal.present();
  }

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

