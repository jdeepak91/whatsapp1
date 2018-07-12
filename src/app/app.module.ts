import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { NormalListPage } from '../pages/normal-list/normal-list';
import { ContactPage } from '../pages/contact/contact';
import { LoginPage } from '../pages/login/login';
import { ChatsPage } from '../pages/chats/chats';
import { PopoverComponent } from '../components/popover/popover';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    NormalListPage,
    LoginPage,
    ChatsPage,
    PopoverComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    NormalListPage,
    LoginPage,
    ChatsPage,
    PopoverComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
