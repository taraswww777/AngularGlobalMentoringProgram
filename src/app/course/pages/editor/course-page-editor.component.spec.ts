import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePageEditorComponent } from './course-page-editor.component';

describe('CoursePageEditorComponent', () => {
  let component: CoursePageEditorComponent;
  let fixture: ComponentFixture<CoursePageEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursePageEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursePageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
