import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';

import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateBetsComponent } from './create-bets/create-bets.component';
import { ViewBetsComponent } from './view-bets/view-bets.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';

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
    MaterialModule,
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
