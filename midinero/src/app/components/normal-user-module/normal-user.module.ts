import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalUserRoutingModule } from './normal-user-routing.module';
import { NormalUserComponent } from './normal-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovementListComponent } from './movement-list/movement-list.component';



@NgModule({
  declarations: [
    NormalUserComponent,
    NavBarComponent,
    SideBarComponent,
    MovementListComponent
  ],
  imports: [
    CommonModule,
    NormalUserRoutingModule,
    SidebarModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class NormalUserModule { }
