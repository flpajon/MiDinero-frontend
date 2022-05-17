import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NormalUserComponent } from './normal-user.component';

const routes: Routes = [
  {
    path: '',
    component: NormalUserComponent,
    children: [

    ]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NormalUserRoutingModule { }
