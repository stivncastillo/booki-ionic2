import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, QueryEncoder, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

/*
  Generated class for the Books provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BookService {
	url: string;
	api_token: string;

	constructor(public http: Http) {
		this.url = 'http://booki-api.dev/api/v1/';
		this.api_token = localStorage.getItem('token');
	}

	getBooks() {
		let params: URLSearchParams = new URLSearchParams();
		params.set('api_token', this.api_token);

		return this.http.get(this.url + 'books', {search: params})
						.map(res => res.json());
	}

}
