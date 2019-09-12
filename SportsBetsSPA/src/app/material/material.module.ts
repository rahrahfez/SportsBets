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
  MatProgressSpinnerModule
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
    MatProgressSpinnerModule
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
    MatProgressSpinnerModule
  ]
})
export class MaterialModule { }
