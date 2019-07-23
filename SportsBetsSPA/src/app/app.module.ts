import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutesModule } from './app.routes.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RepositoryService } from 'src/Services/repository.service';
import { AuthService } from 'src/Services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/store/auth.effect';
import { reducers } from './store/app.state';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { TokenService } from 'src/Services/token.service';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutesModule,
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
