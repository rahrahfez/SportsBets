import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CoreModule } from '@angular/flex-layout';
import { RecentWagersComponent } from './recent-wagers/recent-wagers.component';



@NgModule({
  declarations: [
    WelcomeCardComponent,
    DashboardComponent,
    RecentWagersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule
  ]
})
export class AccountModule { }
