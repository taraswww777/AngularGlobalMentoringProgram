import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesLoadMoreComponent } from './courses-load-more.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('CoursesLoadMoreComponent', () => {
  let component: CoursesLoadMoreComponent;
  let fixture: ComponentFixture<CoursesLoadMoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesLoadMoreComponent ],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesLoadMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
