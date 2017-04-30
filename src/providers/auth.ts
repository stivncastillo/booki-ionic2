import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the Auth provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Auth {
	url: string;

	constructor(public http: Http) {
		console.log('Hello Auth Provider');
		this.url = 'http://booki.app/api/v1/';
	}

	login(email:string, password:string, rememberme:boolean = false){
		let params: URLSearchParams = new URLSearchParams();
		let data = {
			email: email,
			password: password,
			rememberme: rememberme
		};

		let headers = new Headers({ 'Accept': 'application/json', 'Content-Type': 'application/json' });
		let options = new RequestOptions({ headers: headers });

		return this.http.post(this.url + 'auth/login', data, options)
						.map(res => res.json())
						.do(
							tokenData => {
								localStorage.setItem('token', tokenData.data.api_token);
							}
						);
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
