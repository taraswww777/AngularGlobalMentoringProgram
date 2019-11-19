import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBtnEditComponent } from './courses-btn-edit.component';

describe('CoursesBtnEditComponent', () => {
  let component: CoursesBtnEditComponent;
  let fixture: ComponentFixture<CoursesBtnEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesBtnEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBtnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
