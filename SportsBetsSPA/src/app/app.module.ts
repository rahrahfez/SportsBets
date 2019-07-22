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
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { RepositoryService } from 'src/Services/repository.service';
import { LoginComponent } from './login/login.component';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { ViewBetsComponent } from './view-bets/view-bets.component';
import { CreateBetsComponent } from './create-bets/create-bets.component';
import { AuthService } from 'src/Services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from 'src/Auth/store/auth.effect';
import { reducers } from './store/app.state';
import { AuthGuard } from 'src/Auth/auth.guard';
import { TokenService } from 'src/Services/token.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    NavToolbarComponent,
    LoginComponent,
    WelcomeCardComponent,
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
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: []
      }
    }),
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([AuthEffects])
  ],
  providers: [
    RepositoryService,
    AuthService,
    AuthGuard,
    TokenService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    RegisterComponent
  ]
})
export class AppModule { }
