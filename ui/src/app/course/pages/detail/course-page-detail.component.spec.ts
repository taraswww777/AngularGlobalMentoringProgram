import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageDetailComponent } from './course-page-detail.component';

describe('CoursePageDetailComponent', () => {
  let component: CoursePageDetailComponent;
  let fixture: ComponentFixture<CoursePageDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
