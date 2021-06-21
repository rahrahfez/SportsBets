import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { HomeRoutesModule } from './home.routes.module';
import { RecentWagersComponent } from './recent-wagers/recent-wagers.component';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/home.effect';
import { AuthModule } from '../auth/auth.module';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    NavToolbarComponent,
    DashboardComponent,
    WelcomeCardComponent,
    HeaderComponent,
    HomeComponent,
    RecentWagersComponent,
    TopNavbarComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutesModule,
    AuthModule,
    EffectsModule.forFeature([UserEffects])
  ]
})
export class HomeModule { }
