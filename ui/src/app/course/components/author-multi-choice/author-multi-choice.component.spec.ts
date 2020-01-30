import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorMultiChoiceComponent } from './author-multi-choice.component';

describe('AuthorMultiChoiceComponent', () => {
  let component: AuthorMultiChoiceComponent;
  let fixture: ComponentFixture<AuthorMultiChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorMultiChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorMultiChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
