import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBetsComponent } from './create-bets/create-bets.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'select', loadChildren: () => import('../wagers/wagers.module').then(m => m.WagerModule) },
    { path: 'create', component: CreateBetsComponent }
  ]},
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
