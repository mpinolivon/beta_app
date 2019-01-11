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

  constructor(public sessionS:SessionService, public events: Events, public services:ServicesAuth) {
    this.sessionS.setObject('paramInscrip','none')
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
