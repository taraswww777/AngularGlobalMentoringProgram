import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { TCourse } from '../../models/course';
import { CourseService } from '../../services/course.service';
import { LoadingService } from 'src/app/common/services';

@Component({
	selector: 'app-page-courses',
	templateUrl: './page-list.component.html',
	styleUrls: ['./page-list.component.css',]
})
export class CoursePageListComponent implements OnInit, OnDestroy {
	public listCourses: TCourse[] = [];
	private subs: Subscription[] = [];
	public paginationPage: number = 0;
	public paginationPageSize: number = 25;
	public searchString?: string = undefined;

	constructor(
		private _cdRef: ChangeDetectorRef,
		private _courseService: CourseService,
		private _loadingService: LoadingService,
	) {
		this.refreshListCourses();
	}

	public get isLoading(){
		return this._loadingService.isLoading;
	}

	ngOnInit() {
	}

	public onStartSearch(search: string) {
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
		this._loadingService.startRequest();
		const start = this.paginationPage * this.paginationPageSize;
		this.paginationPage++;
		return this._courseService.getCourses({
			start,
			count: this.paginationPageSize,
			textFragment: this.searchString
		});
	}

	private _setListCourses(courses: TCourse[]) {
		this.listCourses = courses;
		this._loadingService.finishRequest();
		this._cdRef.markForCheck();
	}


	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}

}
