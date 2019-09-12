import { NgModule } from '@angular/core';

import { InMemoryWagerService } from 'src/Services/in-memory-wager.service';
import { SharedModule } from '../shared/shared.module';
import { CreateWagerComponent } from './create-wager/create-wager.component';
import { SelectWagerComponent } from './select-wager/select-wager.component';
import { WagersComponent } from './wagers.component';
import { WagerRoutesModule } from './wagers.routes.module';
import { RandomNumGenWagerComponent } from './random-num-gen-wager/random-num-gen-wager.component';

@NgModule({
  imports: [
    SharedModule,
    WagerRoutesModule
  ],
  exports: [
    SelectWagerComponent
  ],
  providers: [
    InMemoryWagerService
  ],
  declarations: [
    CreateWagerComponent,
    SelectWagerComponent,
    WagersComponent,
    RandomNumGenWagerComponent
  ]
})

export class WagerModule { }
