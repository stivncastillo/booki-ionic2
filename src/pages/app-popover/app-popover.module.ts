import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { AppPopover } from './app-popover';

@NgModule({
  declarations: [
    AppPopover,
  ],
  imports: [
    IonicModule.forChild(AppPopover),
  ],
  exports: [
    AppPopover
  ]
})
export class AppPopoverModule {}
