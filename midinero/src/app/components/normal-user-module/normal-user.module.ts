import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalUserRoutingModule } from './normal-user-routing.module';
import { NormalUserComponent } from './normal-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrentMovementListComponent } from './current-movement-list/current-movement-list.component';
import { HistoricalMovementListComponent } from './historical-movement-list/historical-movement-list.component';
import { NewMovementComponent } from './new-movement/new-movement.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { InformationDashboardComponent } from './information-dashboard/information-dashboard.component';



@NgModule({
  declarations: [
    NormalUserComponent,
    NavBarComponent,
    SideBarComponent,
    CurrentMovementListComponent,
    HistoricalMovementListComponent,
    NewMovementComponent,
    InformationDashboardComponent
  ],
  imports: [
    CommonModule,
    NormalUserRoutingModule,
    SidebarModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule
  ]
})
export class NormalUserModule { }
