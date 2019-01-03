import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ReadingPage } from '../reading/reading';
import { SessionService } from '../../services/session.service';
import { Events } from 'ionic-angular';


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

  constructor(public sessionS:SessionService, public events: Events) {
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
    this.inscript = this.sessionS.getObject('paramInscrip');
  }
}
