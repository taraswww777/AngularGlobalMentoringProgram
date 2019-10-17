import {Component, OnInit} from '@angular/core';
import {Course} from 'src/models/course';

@Component({
	selector: 'app-page-courses',
	templateUrl: './page-courses.component.html',
	styleUrls: ['./page-courses.component.css']
})
export class PageCoursesComponent implements OnInit {
	listCourses: Course[] = [];

	constructor() {
		this.listCourses.push(new Course({
			Id: 1,
			Title: 'demo Title',
			CreationDate: 'demo CreationDate',
			Duration: 15,
			Description: 'demo Description',
		}));

		this.listCourses.push(new Course({
			Id: 2,
			Title: 'demo Title 2',
			CreationDate: 'demo CreationDate 2',
			Duration: 15,
			Description: 'demo Description 2',
		}));
	}

	ngOnInit() {
	}

}
