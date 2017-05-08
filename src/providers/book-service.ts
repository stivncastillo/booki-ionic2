import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Book } from '../models/book';

/*
  Generated class for the Books provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BookService {
	url: string;
	token: string;

	constructor(public http: Http) {
		this.url = 'http://booki-backend.dev/api/v1/';
		this.token = localStorage.getItem('token');
	}

	getBooks() {
		let headers = new Headers({
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + this.token
		});

		let options = new RequestOptions({ headers: headers });

		return this.http.get(this.url + 'books', options)
                    .map(this.extractData)
                    .catch(this.handleError);

		/*let params: URLSearchParams = new URLSearchParams();
		params.set('api_token', this.api_token);

		return this.http.get(this.url + 'books', {search: params})
						.map(res => res.json());*/
	}

	private extractData(res: Response) {
		let body = res.json();
		return body.data || { };
	}

	private handleError (error: Response | any) {
		console.log(error);
		// In a real world app, you might use a remote logging infrastructure
		let errMsg: string;
		if (error instanceof Response) {
			const body = error.json() || '';
			const err = body.error || JSON.stringify(body);
			errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
		} else {
			errMsg = error.message ? error.message : error.toString();
		}
		console.error(errMsg);
		return Observable.throw(errMsg);
	}

}
