import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';

import { LoginComponent } from './login.component';
import { MaterialModule } from '../../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from 'src/Services/auth.service';
import { JwtModule } from '@auth0/angular-jwt';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { User } from 'src/Models/user.model';
import { Observable, of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: AuthService;
  let store: MockStore<{ loggedIn: boolean }>;
  const initialState = { loggedIn: false };
  // const user$: Observable<User> = of({
  //   Username: 'test',
  //   UserId: '12345',
  //   AvailableBalance: 100,
  // });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        HttpClientTestingModule,
        JwtModule.forRoot({
          config: {
            tokenGetter: () => {
              return localStorage.getItem('token');
            },
            whitelistedDomains: ['localhost:5000'],
            blacklistedRoutes: []
          }
        }),
        NoopAnimationsModule
       ],
       providers: [
         AuthService,
         provideMockStore({ initialState })
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;

    service = TestBed.get<AuthService>(AuthService);
    store = TestBed.get(Store);

    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeDefined();
  });
});
