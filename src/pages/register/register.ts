import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BookListPage } from '../book-list/book-list';
import { LoginPage } from '../login/login';

import { User } from '../../models/user';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
	loginPage = LoginPage;
  bookListPage = BookListPage;
  public user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = new User(0, 'Juaco', '', '', '', '', '', '');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  public registerUser(){
    console.log(this.user);
  }

}
