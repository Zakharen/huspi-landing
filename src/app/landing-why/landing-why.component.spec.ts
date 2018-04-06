import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingWhyComponent } from './landing-why.component';

describe('LandingWhyComponent', () => {
  let component: LandingWhyComponent;
  let fixture: ComponentFixture<LandingWhyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingWhyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
