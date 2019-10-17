import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PageCoursesComponent} from './page-courses.component';

describe('PageCoursesComponent', () => {
	let component: PageCoursesComponent;
	let fixture: ComponentFixture<PageCoursesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [PageCoursesComponent]
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
