import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { JwtModule } from '@auth0/angular-jwt';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    SharedModule,
    JwtModule.forRoot({
      config: {
        // tokenGetter: () => {
        //   return localStorage.getItem('token');
        // },
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: []
      }
    }),
  ]
})
export class AuthModule {}
