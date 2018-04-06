import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingServiceComponent } from './landing-service.component';

describe('LandingServiceComponent', () => {
  let component: LandingServiceComponent;
  let fixture: ComponentFixture<LandingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
