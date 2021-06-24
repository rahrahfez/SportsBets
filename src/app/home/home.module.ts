import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutesModule } from './home.routes.module';
import { AuthModule } from '../auth/auth.module';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    TopNavbarComponent,
  ],
  imports: [
    SharedModule,
    HomeRoutesModule,
    AuthModule,
  ]
})
export class HomeModule { }
