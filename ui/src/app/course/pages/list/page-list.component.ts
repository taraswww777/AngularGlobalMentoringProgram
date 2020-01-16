import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from '../../../common/services/user.service';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { TCourse } from '../../models/course';
import { getCourses } from '../../http/courses';

@Component({
	selector: 'app-page-courses',
	templateUrl: './page-list.component.html',
	styleUrls: ['./page-list.component.css',]
})
export class CoursePageListComponent implements OnInit, OnDestroy {
	public listCourses: TCourse[] = [];
	private subs: Subscription[] = [];
	public paginationPage: number = 0;
	public paginationPageSize: number = 2;
	public searchString?: string = undefined;

	constructor(
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


	public onSubmitSearch(search: string) {
		this.paginationPage = 0;
		this.searchString = search;
		this.subs.push(this._loadMore().subscribe(this._setListCourses.bind(this)));
	}

	public refreshListCourses() {
		this.paginationPage = 0;
		this.subs.push(this._loadMore().subscribe(this._setListCourses.bind(this)));
	}

	public loadMore() {
		this.subs.push(this._loadMore().subscribe(this._setListCourses.bind(this)));
	}

	private _loadMore() {
		const start = this.paginationPage * this.paginationPageSize;
		this.paginationPage++;
		return getCourses(this._httpClient, {
			start,
			count: this.paginationPageSize,
			textFragment: this.searchString
		});
	}

	private _setListCourses(courses: TCourse[]) {
		this.listCourses = courses;
		this._cdRef.markForCheck();
	}


	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}

}
