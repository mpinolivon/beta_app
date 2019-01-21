import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,  ModalController, ViewController, LoadingController} from 'ionic-angular';
import { ServicesAuth } from '../../providers/services/services';
import { SessionService } from '../../services/session.service';


/**
 * Generated class for the ComentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-coment',
  templateUrl: 'coment.html',
})
export class ComentPage {

  public comentText = "";
  public idEvent = this.sessionS.getObject('event').id;
  public listComent:any;

  constructor(public loadingCtrl: LoadingController,public sessionS:SessionService,public services:ServicesAuth,public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.getComents();
    console.log('ionViewDidLoad ComentPage');
  }


  getComents(){
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    let header = {'headers':{
      'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
    }
  }
    this.services.listComent(header, this.idEvent).subscribe(response => {
      this.listComent = response.data.comments.reverse();
      console.log(this.listComent)
      loading.dismiss();
    }, error => {

    })
  }

  dismissPages(){
    this.viewCtrl.dismiss();
  }

  sendComent(){
    let body = {
      'text' : this.comentText,
      'event' : this.idEvent
    }
    let header = {'headers':{
      'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token
    }
    }
    let loading = this.loadingCtrl.create({
      content: ''
    });
    loading.present();
    console.log(this.comentText)
    this.services.sendComent(body,header).subscribe(response => {
      // this.sessionS.setObject('ListEvents',response.data)
      console.log(response);
      loading.dismiss();
      this.getComents();
      this.comentText = '';
    }, error => {
      //alert('Usuario o contraseña incorrecto');
    })
    console.log('richard')
  }

}
