import { Component, Input, OnInit } from '@angular/core';
import { Course } from '../../models/course';

@Component({
	selector: 'courses-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class CourseListComponent implements OnInit {

	@Input() public listCourses: Course[] = [];
	@Input() public refreshListCourses: () => Promise<void> = Promise.resolve;
	@Input() public updateCourse: (Course) => Promise<void> = Promise.resolve;

	ngOnInit() {
	}

}
