import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /*
	Autentica al usuario
  */
  login() {
  	this.navCtrl.setRoot(HomePage)
  }

  /*
	Vista de registro de usuario
  */
  registerView() {
  	this.navCtrl.setRoot(RegisterPage)
  }

}
