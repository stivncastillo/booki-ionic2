import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HistoryFormPage } from '../history-form/history-form';

/*
  Generated class for the BookView page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-book-view',
  templateUrl: 'book-view.html'
})
export class BookViewPage {

	historyFormPage = HistoryFormPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BookViewPage');
  }

}
