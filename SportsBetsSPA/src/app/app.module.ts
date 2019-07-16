import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutesModule } from './app.routes.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { CardComponent } from './card/card.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { RepositoryService } from 'src/Services/repository.service';
import { DisplayUsersComponent } from './display-users/display-users.component';
import { LoginComponent } from './login/login.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ViewBetsComponent } from './view-bets/view-bets.component';
import { CreateBetsComponent } from './create-bets/create-bets.component';
import { AuthService } from 'src/Services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    CardComponent,
    NavToolbarComponent,
    DisplayUsersComponent,
    LoginComponent,
    WelcomeCardComponent,
    SidenavComponent,
    DashboardComponent,
    HeaderComponent,
    ViewBetsComponent,
    CreateBetsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],
  providers: [
    RepositoryService,
    AuthService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterComponent
  ]
})
export class AppModule { }
