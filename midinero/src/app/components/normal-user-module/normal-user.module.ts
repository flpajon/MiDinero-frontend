import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalUserRoutingModule } from './normal-user-routing.module';
import { NormalUserComponent } from './normal-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [
    NormalUserComponent,
    NavBarComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    NormalUserRoutingModule
  ]
})
export class NormalUserModule { }
