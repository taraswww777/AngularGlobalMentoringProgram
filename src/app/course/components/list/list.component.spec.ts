import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseListComponent} from './list.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('CourseListComponent', () => {
	let component: CourseListComponent;
	let fixture: ComponentFixture<CourseListComponent>;

	beforeEach((() => {
		TestBed.configureTestingModule({
			declarations: [CourseListComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		}).compileComponents();

		fixture = TestBed.createComponent(CourseListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
