import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { JwtModule } from '@auth0/angular-jwt';

import { CoreModule } from './core/core.module';
import { AppRoutesModule } from './app.routes.module';
import { AppComponent } from './app.component';
import { AuthEffects } from './auth/auth-store/auth.effect';
import { reducers } from './root-store/root.state';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    HomeModule,
    BrowserAnimationsModule,
    AppRoutesModule,
    StoreModule.forRoot(reducers, {}),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    EffectsModule.forRoot([AuthEffects]),
    JwtModule.forRoot({
      config: {
         tokenGetter: () => {
           return localStorage.getItem('token');
         },
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: []
      }
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
