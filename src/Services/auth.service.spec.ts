import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AuthService } from './auth.service';
import { JwtModule } from '@auth0/angular-jwt';

describe('AuthService', () => {
  let httpTestingController: HttpTestingController;
  let authservice: AuthService;
  const store = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
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
      ],
      providers: [
        AuthService
      ]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    authservice = TestBed.get(AuthService);
    spyOn(localStorage, 'getItem').and.callFake((key) => store[key]);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should create', () => {
    expect(authservice).toBeTruthy();
  });

  it('should login user', () => {
    const userCred = {
      Username: 'test',
      Email: 'test@test.com',
      AvailableBalance: 100,
      Token: '12345'
    };

    authservice.login({Username: 'test', Password: 'password'})
      .subscribe((val: any) => {
        expect(val.Username).toEqual('test');
      });

    const req = httpTestingController.expectOne('http://localhost:5000/api/auth/login');

    expect(req.request.method).toEqual('POST');

    req.flush(userCred);
  });
});
