import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAfterPage } from './login-after';

@NgModule({
  declarations: [
    LoginAfterPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginAfterPage),
  ],
})
export class LoginAfterPageModule {}
