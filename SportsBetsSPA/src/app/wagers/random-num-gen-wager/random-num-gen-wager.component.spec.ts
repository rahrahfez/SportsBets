import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomNumGenWagerComponent } from './random-num-gen-wager.component';

describe('RandomNumGenWagerComponent', () => {
  let component: RandomNumGenWagerComponent;
  let fixture: ComponentFixture<RandomNumGenWagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomNumGenWagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomNumGenWagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
