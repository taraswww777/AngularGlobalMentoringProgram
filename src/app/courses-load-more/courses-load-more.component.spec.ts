import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CoursesLoadMoreComponent} from './courses-load-more.component';

describe('CoursesLoadMoreComponent', () => {
	let component: CoursesLoadMoreComponent;
	let fixture: ComponentFixture<CoursesLoadMoreComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [CoursesLoadMoreComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(CoursesLoadMoreComponent);
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
