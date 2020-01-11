import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from '../../../common/services/user.service';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { TCourse } from '../../models/course';
import { CoursesService } from '../../services/CoursesService';
import { getCourses } from '../../http/getCourses';

@Component({
	selector: 'app-page-courses',
	templateUrl: './page-list.component.html',
	styleUrls: ['./page-list.component.css',]
})
export class CoursePageListComponent implements OnInit, OnDestroy {
	public listCourses: TCourse[] = [];
	private subs: Subscription[] = [];

	constructor(
		private _coursesService: CoursesService,
		private _userService: UserService,
		private _cdRef: ChangeDetectorRef,
		private _httpClient: HttpClient
	) {
		this._userService.requiredLogin().then((isAuth: boolean) => {
			if (isAuth) {
				this.refreshListCourses();
			}
		});
	}

	ngOnInit() {
	}

	protected setListCourses(courses: TCourse[]) {
		this.listCourses = courses;
		this._cdRef.markForCheck();
	}

	protected getList() {
		return getCourses(this._httpClient);
	}


	// public onSubmitSearch(search: string) {
	// this._coursesService.getList({search}).then(this._mapCourses.bind(this));
	// }


	// private _mapCourses(items: Partial<ICourse>[]) {
	// 	this.listCourses = _.map(items, (item: ICourse) => new ICourse(item));
	// }

	public refreshListCourses() {
		this.subs.push(this.getList().subscribe(this.setListCourses.bind(this)));
	}

	public async updateCourse(course: TCourse) {
		console.log('updateCourse.course');
		// 	// TODO: implement normal logic
		// 	this.listCourses.forEach((courseItem: Course, i: number) => {
		// 		if (courseItem.id === course.id) {
		// 			this.listCourses[i] = course;
		// 		}
		// 	});
	}


	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}

}
