import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';

import { BookListPage } from '../book-list/book-list';
import { RegisterPage } from '../register/register';

// Services
import { Auth } from '../../providers/auth';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-login',
	templateUrl: 'login.html',
	providers: [
		Auth
	]
})
export class LoginPage {
	bookListPage = BookListPage;
	registerPage = RegisterPage;

	public email:string = '';
	public password:string = '';

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController,
		public loadingCtrl:LoadingController,
		public _auth: Auth
	) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	onLogin() {
		this.validate();

		let loader = this.loadingCtrl.create({
			content: "Logging in..."
		});
		loader.present();

		this._auth.login(this.email, this.password).subscribe(
			result => {
				if(result.success) {
					loader.dismissAll();
					// this.navCtrl.setRoot(BookListPage);
				}else{
					this.showError('An error has ocurred');
				}
			},

			error => {
				loader.dismissAll();

				let dataError = JSON.parse(error._body);
				this.showError(dataError.errors[0]);
				this.password = '';
			}
		);
	}

	validate() {
		if(this.email === '' || this.password === '') {
			let alert = this.alertCtrl.create({
				title:'Login Error', 
				subTitle:'All fields are rquired',
				buttons:['OK']
			});
			alert.present();
			return;
		} 
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

	showRegister() {
		this.navCtrl.push('RegisterPage');
	}

}
