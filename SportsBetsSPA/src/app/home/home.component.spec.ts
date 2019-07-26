import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { NavToolbarComponent } from './nav-toolbar/nav-toolbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MaterialModule } from '../material/material.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        HeaderComponent,
        NavToolbarComponent
       ],
       imports: [
        RouterTestingModule.withRoutes([
          { path: '', component: HomeComponent }
        ]),
        MaterialModule
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
