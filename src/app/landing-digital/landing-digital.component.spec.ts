import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingDigitalComponent } from './landing-digital.component';

describe('LandingDigitalComponent', () => {
  let component: LandingDigitalComponent;
  let fixture: ComponentFixture<LandingDigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingDigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingDigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
