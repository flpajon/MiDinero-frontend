import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricalMovementListComponent } from './historical-movement-list/historical-movement-list.component';
import { CurrentMovementListComponent } from './current-movement-list/current-movement-list.component';
import { NormalUserComponent } from './normal-user.component';

const routes: Routes = [
  {
    path: '',
    component: NormalUserComponent,
    children: [
      {
        path: 'current-movement-list',
        component: CurrentMovementListComponent
      },{
        path: 'historical-movement-list',
        component: HistoricalMovementListComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalUserRoutingModule { }
