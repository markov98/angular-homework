import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { EmailDirective } from './validators/email.directive';
import { SlicePipe } from './pipes/slice.pipe';
import { TimePipe } from './pipes/time.pipe';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMsgComponent,
    EmailDirective,
    SlicePipe,
    TimePipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    LoaderComponent,
    WelcomeMsgComponent,
    EmailDirective,
    SlicePipe,
    TimePipe
  ]
})
export class SharedModule { }
