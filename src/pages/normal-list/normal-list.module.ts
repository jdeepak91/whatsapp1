import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NormalListPage } from './normal-list';

@NgModule({
  declarations: [
    NormalListPage,
  ],
  imports: [
    IonicPageModule.forChild(NormalListPage),
  ],
})
export class NormalListPageModule {}
