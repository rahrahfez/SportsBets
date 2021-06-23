import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register-modal/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { SharedModule } from '../shared/shared.module';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent
  ],
  imports: [
    SharedModule,
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
  entryComponents: [
    RegisterComponent
  ]
})
export class AuthModule {}
