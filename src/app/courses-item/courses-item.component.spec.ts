import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesItemComponent} from './courses-item.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('CoursesItemComponent', () => {
	let component: CoursesItemComponent;
	let fixture: ComponentFixture<CoursesItemComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CoursesItemComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CoursesItemComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
