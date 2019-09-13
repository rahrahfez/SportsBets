import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatButtonModule,
  MatTableModule,
  MatCardModule,
  MatSidenavModule,
  MatSelectModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatTabsModule
 } from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ],
  exports: [
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatSidenavModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTabsModule
  ]
})
export class MaterialModule { }
