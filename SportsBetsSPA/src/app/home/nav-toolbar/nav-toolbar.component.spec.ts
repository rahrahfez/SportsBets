import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavToolbarComponent } from './nav-toolbar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('NavToolbarComponent', () => {
  let component: NavToolbarComponent;
  let fixture: ComponentFixture<NavToolbarComponent>;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavToolbarComponent
       ],
      imports: [
        FlexLayoutModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavToolbarComponent);
    component = fixture.componentInstance;

    router = TestBed.get(Router);
    spyOn(router, 'navigate');

    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeDefined();
  });

  it('should navigate to dashboard', async(() => {
    const link = fixture.debugElement.nativeElement.querySelector('.toDashboard-link');
    link.click();
    expect(router.navigate).toHaveBeenCalled();
  }));

  it('should navigate to view-bets', async(() => {
    const link = fixture.debugElement.nativeElement.querySelector('.toView-link');
    link.click();
    expect(router.navigate).toHaveBeenCalled();
  }));

  it('should navigate to create-bets', async(() => {
    const link = fixture.debugElement.nativeElement.querySelector('.toCreate-link');
    link.click();
    expect(router.navigate).toHaveBeenCalled();
  }));
});
