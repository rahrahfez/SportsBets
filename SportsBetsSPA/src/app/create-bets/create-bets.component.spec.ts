import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBetsComponent } from './create-bets.component';

describe('CreateBetsComponent', () => {
  let component: CreateBetsComponent;
  let fixture: ComponentFixture<CreateBetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
