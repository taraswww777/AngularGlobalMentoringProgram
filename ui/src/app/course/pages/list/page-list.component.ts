import { Component, OnInit } from '@angular/core';
import _ from 'lodash';
import { UserService } from '../../../common/services/user.service';
import { Course, TCourse } from '../../models/course';
import { CoursesService } from '../../services/CoursesService';

@Component({
	selector: 'app-page-courses',
	templateUrl: './page-list.component.html',
	styleUrls: ['./page-list.component.css',]
})
export class CoursePageListComponent implements OnInit {
	public listCourses: Course[] = [];

	constructor(
		private _coursesService: CoursesService,
		private _userService: UserService
	) {
		this._userService.requiredLogin().then((isAuth: boolean) => {
			if (isAuth) {
				this.refreshListCourses();
			}
		});
	}

	ngOnInit() {
	}

	public onSubmitSearch(search: string) {
		this._coursesService.getList({ search }).then(this._mapCourses.bind(this));
	}


	private _mapCourses(items: Partial<TCourse>[]) {
		this.listCourses = _.map(items, (item: TCourse) => new Course(item));
	}

	public refreshListCourses() {
		this._coursesService.getList().then(this._mapCourses.bind(this));
	}

	public async updateCourse(course: Course) {
		// TODO: implement normal logic
		this.listCourses.forEach((courseItem: Course, i: number) => {
			if (courseItem.id === course.id) {
				this.listCourses[i] = course;
			}
		});
	}

}
