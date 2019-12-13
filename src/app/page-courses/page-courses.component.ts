import {Component, OnInit} from '@angular/core';
import {Course} from 'src/models/course';
import {getLocaleDateFormat} from "@angular/common";

@Component({
	selector: 'app-page-courses',
	templateUrl: './page-courses.component.html',
	styleUrls: [
		'./page-courses.component.css',
	]
})
export class PageCoursesComponent implements OnInit {
	listCourses: Course[] = [];

	constructor() {
		this.listCourses.push(new Course({
			id: 1,
			title: 'demo Title',
			creationDate: '10-10-2019',
			duration: 15,
			description: 'demo Description',
		}));

		this.listCourses.push(new Course({
			id: 2,
			title: 'demo Title 2',
			creationDate: '10-10-2019',
			duration: 15,
			description: 'demo Description 2',
		}));
	}

	ngOnInit() {
	}

}
