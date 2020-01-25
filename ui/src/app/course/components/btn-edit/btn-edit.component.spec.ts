import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseBtnEditComponent } from './btn-edit.component';

describe('CourseBtnEditComponent', () => {
  let component: CourseBtnEditComponent;
  let fixture: ComponentFixture<CourseBtnEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseBtnEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseBtnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
