import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDeleteComponent } from './courses-delete.component';

describe('CoursesDeleteComponent', () => {
  let component: CoursesDeleteComponent;
  let fixture: ComponentFixture<CoursesDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
