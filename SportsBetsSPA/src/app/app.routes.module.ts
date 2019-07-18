import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ViewBetsComponent } from './view-bets/view-bets.component';
import { CreateBetsComponent } from './create-bets/create-bets.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from '../Auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '_', component: HomeComponent, canActivate: [AuthGuard], children: [
    { path: 'view', component: ViewBetsComponent },
    { path: 'create', component: CreateBetsComponent },
    { path: 'dashboard', component: DashboardComponent }
  ]},
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: '/login'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule { }
