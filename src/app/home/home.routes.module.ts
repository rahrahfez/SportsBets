import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../auth/login/login.component';

import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'wagers', loadChildren: () => import('../wagers/wagers.module').then(m => m.WagerModule) }
  ]},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRoutesModule {}
