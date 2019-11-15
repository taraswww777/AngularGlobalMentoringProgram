import {map} from 'lodash';
import {Component, OnInit} from '@angular/core';
import {Course, CourseProps} from 'src/models/course';
import {CoursesService} from '../../services/CoursesService';
import {ICourse} from '../../interfaces/course';

@Component({
	selector: 'app-page-courses',
	templateUrl: './page-courses.component.html',
	styleUrls: [
		'./page-courses.component.css',
	]
})
export class PageCoursesComponent implements OnInit {
	listCourses: Course[] = [];

	constructor(coursesService: CoursesService) {
		setTimeout(() => {
			coursesService.getList().then((items: ICourse[]) => {
				map(items, (item: CourseProps) => this.listCourses.push(new Course(item)));
			});
		}, 1);
	}

	ngOnInit() {
	}

}
