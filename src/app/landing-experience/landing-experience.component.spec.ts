import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingExperienceComponent } from './landing-experience.component';

describe('LandingExperienceComponent', () => {
  let component: LandingExperienceComponent;
  let fixture: ComponentFixture<LandingExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
