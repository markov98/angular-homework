import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader/loader.component';
import { WelcomeMsgComponent } from './welcome-msg/welcome-msg.component';
import { UserRoutingModule } from '../user/user-routing.module';



@NgModule({
  declarations: [
    LoaderComponent,
    WelcomeMsgComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports: [
    LoaderComponent,
    WelcomeMsgComponent
  ]
})
export class SharedModule { }
