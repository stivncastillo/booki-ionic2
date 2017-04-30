import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

import { BookViewPage } from '../book-view/book-view';
import { BookFormPage } from '../book-form/book-form';

import { Book } from '../../models/book';

// Services
import { Auth } from '../../providers/auth';
import { BookService } from '../../providers/book-service';

/*
  Generated class for the BookList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-book-list',
	templateUrl: 'book-list.html',
	providers: [
		BookService,
		Auth
	]
})
export class BookListPage {
	
	books: Book[];
	bookViewPage = BookViewPage;
	bookFormPage = BookFormPage;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public _bookService: BookService
	) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad BookListPage');
		this._bookService.getBooks().subscribe(
			result => {
				if( ! result.success) {
					this.showError('An error has ocurred');
				}
				this.books = result.data;
			},

			error => {
				let dataError = JSON.parse(error._body);
				this.showError(dataError.errors[0]);
			}
		)
	}

	showError(message:string) {
		let alert = this.alertCtrl.create({
			title: 'Error', 
			subTitle: message,
			buttons: ['OK']
		});

		alert.present();
		return;
	}

}
