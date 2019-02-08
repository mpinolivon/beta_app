import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ReadingPage } from '../reading/reading';
import { SessionService } from '../../services/session.service';
import { Events } from 'ionic-angular';
import { ServicesAuth } from '../../providers/services/services';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ReadingPage;
  public menuAppear = 'none';
  public inscript = '';
  public user:any;

  public nameUser:any;

  constructor(public sessionS:SessionService, public events: Events, public services:ServicesAuth) {
    var body = {'device': this.sessionS.getObject('device')};
    var header = {'headers':{'Authorization': this.sessionS.getObject('answertoken').token_type + " " + this.sessionS.getObject('answertoken').access_token}}
    this.services.updateIdDevice(body, header).subscribe(response => {
      console.log(response)
    }, error => {
      //alert('Usuario o contraseña incorrecto');
    })

    this.sessionS.setObject('paramInscrip','none')
    this.user = this.sessionS.getObject('user').data;
    this.nameUser = this.user.name.split(" ")[0] + " " +this.user.lastname.split(" ")[0];
    console.log(this.nameUser)
    this.inscript = this.sessionS.getObject('paramInscrip');
    events.subscribe('user:login', () => {
      this.inscribe();
    });


  

  }

  
  menuOpen(){
    this.menuAppear = 'block';
    console.log('asdasdasd')
  }

  menuClose(){
    this.menuAppear = 'none';
  }

  inscribe() {
    console.log('Timer Start');
    const start = Date.now();
    let timeOutHandler = setTimeout(() => {
        const e = Date.now() - start;
        console.log('Timer End', e);
        this.sessionS.setObject('paramInscrip','none')
        this.inscript =  this.sessionS.getObject('paramInscrip');
      },
      2000
    );
    this.inscript = this.sessionS.getObject('paramInscrip');
  }


  
}
