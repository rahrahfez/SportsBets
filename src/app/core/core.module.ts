import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { throwIfAlreadyLoaded } from '../guards/import.guard';
import { AuthModule } from '../auth/auth.module';
import { HomeModule } from '../home/home.module';
import { RepositoryService } from 'src/Services/repository.service';
import { TokenService } from 'src/Services/token.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthModule,
    HomeModule
  ],
  providers: [
    RepositoryService,
    TokenService
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
 }
