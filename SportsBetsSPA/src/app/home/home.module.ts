import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewBetsComponent } from './view-bets/view-bets.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { HomeRoutesModule } from './home.routes.module';
import { RecentWagersComponent } from './recent-wagers/recent-wagers.component';

@NgModule({
  declarations: [
    NavToolbarComponent,
    DashboardComponent,
    ViewBetsComponent,
    WelcomeCardComponent,
    HeaderComponent,
    HomeComponent,
    RecentWagersComponent
  ],
  imports: [
    SharedModule,
    HomeRoutesModule
  ]
})
export class HomeModule { }
