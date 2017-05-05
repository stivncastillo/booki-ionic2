import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { User } from '../models/user';

/*
  Generated class for the Register provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Register {
	url: string;
	public user: User;

	constructor(public http: Http) {
		this.user = new User(0, 'Juaco', '', '', '', '', '', '');
		this.url = 'http://booki-backend.dev/api/v1/';

	}

	public registerUser(){
		console.log(this.user);
		/*let data = {
			email: email,
			password: password,
			rememberme: rememberme
		};

		let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.url + 'login', data, options)
						.map(res => res.json())
						.do(
							tokenData => {
								localStorage.setItem('token', tokenData.data.token);
							}
							);*/
	}

	isAuthenticated():boolean {
		if (localStorage.getItem('token') === null){
			return false;
		}

		return true;
	}

	getToken() {
		return localStorage.getItem('token');
	}

}
