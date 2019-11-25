import * as _ from 'lodash';
import {Component, OnInit} from '@angular/core';
import {Course, TCourse} from "../../models/course";
import {CoursesService} from '../../services/CoursesService';

@Component({
	selector: 'app-page-courses',
	templateUrl: './page-list.component.html',
	styleUrls: ['./page-list.component.css',]
})
export class CoursePageListComponent implements OnInit {
	listCourses: Course[] = [];

	private _coursesService: CoursesService;

	constructor(coursesService: CoursesService) {
		this._coursesService = coursesService;
		this._coursesService.getList().then(this._mapCourses.bind(this));
	}

	ngOnInit() {
	}

	public onSubmitSearch(search: string) {
		this._coursesService.getList({search}).then(this._mapCourses.bind(this));
	}


	private _mapCourses(items: Partial<TCourse>[]) {
		this.listCourses = _.map(items, (item: TCourse) => new Course(item));
	}
}
