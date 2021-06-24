import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentWagersComponent } from './recent-wagers.component';

describe('RecentWagersComponent', () => {
  let component: RecentWagersComponent;
  let fixture: ComponentFixture<RecentWagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentWagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentWagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
