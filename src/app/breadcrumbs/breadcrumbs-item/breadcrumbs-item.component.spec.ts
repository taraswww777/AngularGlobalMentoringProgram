import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreadcrumbsItemComponent } from './breadcrumbs-item.component';

describe('BreadcrumbsItemComponent', () => {
  let component: BreadcrumbsItemComponent;
  let fixture: ComponentFixture<BreadcrumbsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreadcrumbsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreadcrumbsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
