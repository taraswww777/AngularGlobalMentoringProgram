import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PageCoursesComponent} from './page-courses.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('PageCoursesComponent', () => {
	let component: PageCoursesComponent;
	let fixture: ComponentFixture<PageCoursesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PageCoursesComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(PageCoursesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
