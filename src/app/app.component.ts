import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { BookListPage } from '../pages/book-list/book-list';

// Services
import { Auth } from '../providers/auth';

@Component({
	templateUrl: 'app.html',
	providers: [
		Auth
	]
})
export class MyApp {
	rootPage:any = LoginPage;

	constructor(
		platform: Platform, 
		private splashScreen: SplashScreen,
		_auth: Auth
	) {
		let self = this;

		this.splashScreen.show();

		platform.ready().then(() => {
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			// StatusBar.styleDefault();
			this.splashScreen.hide();

			self.setRootPage(_auth);
		});
	}

	// Is autenticated
	setRootPage(_auth: Auth) {
		if (_auth.isAuthenticated()){
			this.rootPage = BookListPage;
		} else {
			this.rootPage = LoginPage
		}
	}
}
