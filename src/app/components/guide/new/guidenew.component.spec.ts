import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuidenewComponent } from './guidenew.component';

describe('GuidenewComponent', () => {
  let component: GuidenewComponent;
  let fixture: ComponentFixture<GuidenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuidenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuidenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
