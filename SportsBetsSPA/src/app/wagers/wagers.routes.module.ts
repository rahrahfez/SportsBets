import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectWagerComponent } from './select-wager/select-wager.component';

const routes: Routes = [
  { path: '', component: SelectWagerComponent }
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
