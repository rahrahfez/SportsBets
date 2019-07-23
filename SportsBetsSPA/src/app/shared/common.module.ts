import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class CommonModule {}
