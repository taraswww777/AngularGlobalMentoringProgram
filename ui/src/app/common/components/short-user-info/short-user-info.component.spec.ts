import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortUserInfoComponent } from './short-user-info.component';

describe('ShortUserInfoComponent', () => {
  let component: ShortUserInfoComponent;
  let fixture: ComponentFixture<ShortUserInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortUserInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
