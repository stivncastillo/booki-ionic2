import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

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
		public _auth: Auth
	) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad LoginPage');
	}

	onLogin() {
		this.validate();
		/*this._auth.login(this.email, this.password).subscribe(
			result => {
				if( ! result.success) {
					console.log('error');
					console.log(result);
				}
				console.log(result);

				// this._router.navigate(['/']);
			},

			error => {
				this.errorMessage = <any>error;
				console.log(this.errorMessage);
			}
		);*/
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

}
