import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingServiceBlocksComponent } from './landing-service-blocks.component';

describe('LandingServiceBlocksComponent', () => {
  let component: LandingServiceBlocksComponent;
  let fixture: ComponentFixture<LandingServiceBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingServiceBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingServiceBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
