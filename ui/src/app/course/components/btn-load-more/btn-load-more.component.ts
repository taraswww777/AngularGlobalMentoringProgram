import { Component, Input, OnInit } from '@angular/core';
import { TCourse } from '../../models/course';
import { CoursesService } from '../../services/CoursesService';

@Component({
	selector: 'courses-load-more',
	templateUrl: './btn-load-more.component.html',
	styleUrls: ['./btn-load-more.component.css']
})
export class CourseLoadMoreComponent implements OnInit {
	public showLoader: boolean = false;
	@Input()
	public listCourses: TCourse[] = [];

	private coursesService: CoursesService;

	constructor(coursesService: CoursesService) {
		this.coursesService = coursesService;
	}

	ngOnInit() {
	}

	onLoadMore() {
		this.showLoader = true;
		this.coursesService.getList().then((items: TCourse[]) => {
			items.forEach((item: TCourse) => this.listCourses.push(item));
		});
		this.showLoader = false;
	}
}
