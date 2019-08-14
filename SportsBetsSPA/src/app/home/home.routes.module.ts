import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewBetsComponent } from './view-bets/view-bets.component';
import { CreateBetsComponent } from './create-bets/create-bets.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: '', component: DashboardComponent },
    { path: 'view', component: ViewBetsComponent },
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
