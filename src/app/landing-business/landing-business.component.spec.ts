import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingBusinessComponent } from './landing-business.component';

describe('LandingBusinessComponent', () => {
  let component: LandingBusinessComponent;
  let fixture: ComponentFixture<LandingBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
