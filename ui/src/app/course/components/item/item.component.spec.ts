import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Course } from '../../models/course';
import { CourseItemComponent } from './item.component';


describe('CourseItemComponent', () => {
	let component: CourseItemComponent;
	let fixture: ComponentFixture<CourseItemComponent>;
	const id = 1;
	const course: Course = new Course({
		id: id,
		title: 'demo Title ' + id,
		creationDate: '10-10-2019',
		favorite: false,
		rating: 5,
		duration: 15,
		description: 'demo Description ' + id,
		favorite: true,
		rating: 2
	});

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
		expect(title.nativeElement.innerText).toBe(course.title);
	});

	it('check item description', () => {
		const title = fixture.debugElement.query(By.css('.description'));
		expect(title.nativeElement.innerText).toBe(course.description);
	});
});
