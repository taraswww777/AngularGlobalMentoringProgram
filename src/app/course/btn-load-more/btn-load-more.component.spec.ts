import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CourseLoadMoreComponent} from './btn-load-more.component';

describe('CourseLoadMoreComponent', () => {
	let component: CourseLoadMoreComponent;
	let fixture: ComponentFixture<CourseLoadMoreComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CourseLoadMoreComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CourseLoadMoreComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should work load more', () => {
		const targetLength = 10;

		for (let i = 0; i < targetLength; i++) {
			component.onLoadMore();
		}
		expect(component.listCourses.length).toBe(targetLength);
	});
});
