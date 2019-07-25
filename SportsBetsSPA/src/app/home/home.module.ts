import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBetsComponent } from './create-bets/create-bets.component';
import { ViewBetsComponent } from './view-bets/view-bets.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { HomeRoutesModule } from './home.routes.module';

@NgModule({
  declarations: [
    NavToolbarComponent,
    DashboardComponent,
    CreateBetsComponent,
    ViewBetsComponent,
    WelcomeCardComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    HomeRoutesModule
  ]
})
export class HomeModule { }
