import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { BookViewPage } from '../book-view/book-view';
import { BookFormPage } from '../book-form/book-form';

/*
  Generated class for the BookList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-book-list',
	templateUrl: 'book-list.html'
})
export class BookListPage {
	
	bookViewPage = BookViewPage;
	bookFormPage = BookFormPage;

	constructor(public navCtrl: NavController, public navParams: NavParams) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BookListPage');
	}

}
