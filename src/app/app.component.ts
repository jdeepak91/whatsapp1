import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, Searchbar, Popover, PopoverController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomePage } from '../pages/home/home';
import { NormalListPage } from '../pages/normal-list/normal-list';
import { ContactPage } from '../pages/contact/contact';
import {LoginPage} from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  public popoverCtrl: PopoverController;
  pages: Array<{ title: string, component: any, icon:string }>
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [
      { title: 'Favorites', component: LoginPage, icon:'star' },
      { title: 'Status', component: NormalListPage,icon:'information-circle'  },
      { title: 'Profile', component: ContactPage ,icon:'contact' },
      { title: 'Settings', component: ContactPage ,icon:'settings' }
    ];

  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
    openPage(page) {   
      this.nav.setRoot(page.component);
    }

  }

