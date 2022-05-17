import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    NavBarComponent,
    SideBarComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    RouterModule
  ]
})
export class AdminModule { }
