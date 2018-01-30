import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuideviewComponent } from './guideview.component';

describe('GuideviewComponent', () => {
  let component: GuideviewComponent;
  let fixture: ComponentFixture<GuideviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuideviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuideviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
