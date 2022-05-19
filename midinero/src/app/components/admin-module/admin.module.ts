import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NewUserComponent } from './new-user/new-user.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AdminComponent,
    NavBarComponent,
    SideBarComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SidebarModule,
    RouterModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
