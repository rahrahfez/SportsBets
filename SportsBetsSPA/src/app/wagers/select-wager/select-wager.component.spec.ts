import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectWagerComponent } from './select-wager.component';

describe('SelectWagerComponent', () => {
  let component: SelectWagerComponent;
  let fixture: ComponentFixture<SelectWagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectWagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectWagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
