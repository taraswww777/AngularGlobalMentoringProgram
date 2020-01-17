import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CoursePageListComponent} from './page-list.component';
import {Course} from "../../models/course";

describe('CoursePageListComponent', () => {
	let component: CoursePageListComponent;
	let fixture: ComponentFixture<CoursePageListComponent>;

	const arr = [new Course({
		id: 1,
		title: 'demo Title',
		creationDate: '10-10-2019',
		duration: 15,
		description: 'demo Description',
	}),
		new Course({
			id: 2,
			title: 'demo Title 2',
			creationDate: '10-10-2019',
			duration: 15,
			description: 'demo Description 2',
		})
	];

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CoursePageListComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CoursePageListComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('listCourses', () => {
		expect(component.listCourses).toEqual(arr)
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
