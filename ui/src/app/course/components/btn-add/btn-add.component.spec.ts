import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseAddComponent} from './btn-add.component';

describe('CourseAddComponent', () => {
	let component: CourseAddComponent;
	let fixture: ComponentFixture<CourseAddComponent>;

	beforeEach((() => {
		TestBed.configureTestingModule({
			declarations: [CourseAddComponent]
		}).compileComponents();

		fixture = TestBed.createComponent(CourseAddComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
