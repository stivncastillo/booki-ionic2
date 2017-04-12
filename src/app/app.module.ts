import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { BookListPage } from '../pages/book-list/book-list';
import { BookViewPage } from '../pages/book-view/book-view';
import { BookFormPage } from '../pages/book-form/book-form';

import { HistoryFormPage } from '../pages/history-form/history-form';
import { HistoryViewPage } from '../pages/history-view/history-view';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    BookListPage,
    BookViewPage,
    BookFormPage,
    HistoryFormPage,
    HistoryViewPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    BookListPage,
    BookViewPage,
    BookFormPage,
    HistoryFormPage,
    HistoryViewPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
