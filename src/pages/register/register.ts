import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { BookListPage } from '../book-list/book-list';
import { LoginPage } from '../login/login';

import { User } from '../../models/user';

// Services
import { Register } from '../../providers/register';

/*
  Generated class for the Register page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
	selector: 'page-register',
	templateUrl: 'register.html',
	providers: [
		Register
	]
})

export class RegisterPage {
	loginPage = LoginPage;
	bookListPage = BookListPage;

	public user: User;
	private formRegister: FormGroup;

	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		public loadingCtrl:LoadingController,
		public alertCtrl: AlertController,
		private formBuilder: FormBuilder,
		private _register: Register
	) {

		this.formRegister = this.formBuilder.group({
			first_name: ['', Validators.required],
			last_name: ['', Validators.required],
			email: ['', Validators.required],
			password: ['', Validators.required],
			password_confirmation: ['', Validators.required]
		});
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad RegisterPage');
	}

	public onRegister(){
		let dataForm = this.formRegister.value;

    	let loader = this.loadingCtrl.create({
			content: "Logging in..."
		});
		loader.present();

    	this.user = new User(0, dataForm.first_name, dataForm.last_name, dataForm.email, dataForm.password, dataForm.password_confirmation, '', '');

    	this._register.register(this.user).subscribe(
			result => {
				if(result.success) {
					loader.dismissAll();
					console.log(result);
					// this.navCtrl.setRoot(BookListPage);
				}else{
					this.showError('An error has ocurred');
				}
			},

			error => {
				loader.dismissAll();
				console.log(error);
			}
		);
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
