import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ReadingInternalPage } from '../../pages/reading-internal/reading-internal';


/**
 * Generated class for the ReadingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reading',
  templateUrl: 'reading.html',
})
export class ReadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadingPage');
  }

  goView() {
    let profileModal = this.modalCtrl.create(ReadingInternalPage);
   profileModal.present();
    //this.navCtrl.push(ReadingInternalPage)
    console.log('richard')
  }

}
