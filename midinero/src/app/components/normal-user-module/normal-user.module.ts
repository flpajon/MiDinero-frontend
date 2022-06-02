import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NormalUserRoutingModule } from './normal-user-routing.module';
import { NormalUserComponent } from './normal-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { SidebarModule } from 'ng-sidebar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CurrentMovementListComponent } from './current-movement-list/current-movement-list.component';
import { HistoricalMovementListComponent } from './historical-movement-list/historical-movement-list.component';
import { NewMovementComponent } from './new-movement/new-movement.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { InformationDashboardComponent } from './information-dashboard/information-dashboard.component';
import { AccountStatusComponent } from './information-dashboard/account-status/account-status.component';
import { AccountHistoricalMovementDayComponent } from './information-dashboard/account-historical-movement-day/account-historical-movement-day.component';
import { AccountHistoricalMovementMonthComponent } from './information-dashboard/account-historical-movement-month/account-historical-movement-month.component';
import { AccountHistoricalMovementYearComponent } from './information-dashboard/account-historical-movement-year/account-historical-movement-year.component';



@NgModule({
  declarations: [
    NormalUserComponent,
    NavBarComponent,
    SideBarComponent,
    CurrentMovementListComponent,
    HistoricalMovementListComponent,
    NewMovementComponent,
    InformationDashboardComponent,
    AccountStatusComponent,
    AccountHistoricalMovementDayComponent,
    AccountHistoricalMovementMonthComponent,
    AccountHistoricalMovementYearComponent
  ],
  imports: [
    CommonModule,
    NormalUserRoutingModule,
    SidebarModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgApexchartsModule 
  ]
})
export class NormalUserModule { }
