import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWagerComponent } from './create-wager.component';

describe('CreateWagerComponent', () => {
  let component: CreateWagerComponent;
  let fixture: ComponentFixture<CreateWagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateWagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateWagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
