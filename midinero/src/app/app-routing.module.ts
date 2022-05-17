import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OnlyAdminGuard } from './commons/guards/onlyAdminGuard';
import { OnlyNormalUserGuard } from './commons/guards/onlyNormalUserGuard';
import { AdminModule } from './components/admin-module/admin.module';
import { LoginModule } from './components/login-module/login.module';
import { NormalUserModule } from './components/normal-user-module/normal-user.module';

const routes: Routes = [
  {
    path: "login",
    loadChildren: () => LoginModule
  },
  {
    path: "admin",
    loadChildren: () => AdminModule,
    canActivate: [OnlyAdminGuard]
  },
  {
    path: "user",
    loadChildren: () => NormalUserModule,
    canActivate: [OnlyNormalUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true, onSameUrlNavigation: 'reload', scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
