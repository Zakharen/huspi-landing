import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingReviewsComponent } from './landing-reviews.component';

describe('LandingReviewsComponent', () => {
  let component: LandingReviewsComponent;
  let fixture: ComponentFixture<LandingReviewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingReviewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
