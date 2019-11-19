import {Component, Input, OnInit} from '@angular/core';
import {map} from 'lodash';
import {Course, ICourse, TCourse} from '../../models/course';
import {CoursesService} from "../../services/CoursesService";

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
			map(items, (item: TCourse) => this.listCourses.push(new Course(item)));
		});
		this.showLoader = false
	}
}
