import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectWagerComponent } from './select-wager/select-wager.component';
import { WagersComponent } from './wagers.component';
import { ViewBetsComponent } from '../home/view-bets/view-bets.component';
import { CreateWagerComponent } from './create-wager/create-wager.component';

const routes: Routes = [
  { path: '', component: WagersComponent, children: [
    { path: 'view', component: SelectWagerComponent },
    { path: 'create', component: CreateWagerComponent }
  ]}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class WagerRoutesModule { }
