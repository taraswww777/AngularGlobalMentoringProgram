import {Component, Input, OnInit} from '@angular/core';
import {CoursesService} from "../../services/CoursesService";
import _ from 'lodash';

@Component({
	selector: 'course-btn-delete',
	templateUrl: './btn-delete.component.html',
	styleUrls: [
		'./btn-delete.component.css',
	]
})
export class CourseDeleteComponent implements OnInit {
	@Input() courseId: number;
	@Input() afterDelete: () => void = _.noop;
	private _courseService: CoursesService;

	constructor(
		courseService: CoursesService
	) {
		this._courseService = courseService;
	}

	ngOnInit() {
	}

	public async onDelete() {
		const course = await this._courseService.getById(this.courseId);
		if (window.confirm(`You are sure delete course "${course.title}" ?`)) {
			await this._courseService.delete(this.courseId);
			this.afterDelete();
		}
	}

}
