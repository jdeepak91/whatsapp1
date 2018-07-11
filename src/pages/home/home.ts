import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular/components/popover/popover-controller';
import { PopoverComponent } from '../../components/popover/popover';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public isSearchbarOpened = false;
  public chat:string = 'calls';
  constructor(public navCtrl: NavController, public popoverCtrl:PopoverController) {
  }
  // presentPopover() {
  //   const popover = this.popoverCtrl.create(PopoverComponent);
  //   popover.present();
  // }
  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverComponent);
    popover.present({
      ev: myEvent
    });
  }

}
