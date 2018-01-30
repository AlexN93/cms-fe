import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursenewComponent } from './coursenew.component';

describe('CoursenewComponent', () => {
  let component: CoursenewComponent;
  let fixture: ComponentFixture<CoursenewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursenewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursenewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
