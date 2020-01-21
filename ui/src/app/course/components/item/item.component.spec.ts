import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { TCourse } from '../types';
import { CourseItemComponent } from './item.component';


describe('CourseItemComponent', () => {
	let component: CourseItemComponent;
	let fixture: ComponentFixture<CourseItemComponent>;
	const id = 1;
	const course: TCourse = {
		id: id,
		name: 'demo Title ' + id,
		date: '10-10-2019',
		isTopRated: false,
		length: 15,
		description: 'demo Description ' + id,
		authors: []
	};

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CourseItemComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseItemComponent);
		component = fixture.componentInstance;
		component.course = course;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('check item title', () => {
		const title = fixture.debugElement.query(By.css('.card-title'));
		expect(title.nativeElement.innerText).toBe(course.name);
	});

	it('check item description', () => {
		const title = fixture.debugElement.query(By.css('.description'));
		expect(title.nativeElement.innerText).toBe(course.description);
	});
});
