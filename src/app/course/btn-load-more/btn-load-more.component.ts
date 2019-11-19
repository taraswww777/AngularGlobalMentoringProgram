import {Component, Input, OnInit} from '@angular/core';
import {Course, CourseProps} from "../../../models/course";
import {CoursesService} from 'src/services/CoursesService';
import {ICourse} from "../../../interfaces/course";
import {map} from 'lodash';

@Component({
	selector: 'courses-load-more',
	templateUrl: './btn-load-more.component.html',
	styleUrls: ['./btn-load-more.component.css']
})
export class CourseLoadMoreComponent implements OnInit {
	public showLoader: boolean = false;
	@Input()
	public listCourses: Course[] = [];

	private coursesService: CoursesService;

	constructor(coursesService: CoursesService) {
		this.coursesService = coursesService;
	}

	ngOnInit() {
	}

	onLoadMore() {
		this.showLoader = true;
		this.coursesService.getList().then((items: ICourse[]) => {
			map(items, (item: CourseProps) => this.listCourses.push(new Course(item)));
		});
		this.showLoader = false
	}
}
