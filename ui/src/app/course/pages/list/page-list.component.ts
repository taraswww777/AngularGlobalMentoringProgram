import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { createSelector } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { setCoursesList } from '../../store/reducers/courses.reducer';
import { TCourse } from '../../types';
import { CourseService } from '../../services/course.service';
import { LoadingService } from 'src/app/common/services';
import { TStoreCoursesModule } from '../../store/index.types';
import { getCoursesList } from '../../store/selectors';

@Component({
	selector: 'app-page-courses',
	templateUrl: './page-list.component.html',
	styleUrls: ['./page-list.component.css',]
})
export class CoursePageListComponent implements OnInit, OnDestroy {
	public listCourses: Observable<TCourse[]>;
	private subs: Subscription[] = [];
	public paginationPage: number = 0;
	public paginationPageSize: number = 5;
	public searchString?: string = undefined;

	constructor(
		private _cdRef: ChangeDetectorRef,
		private _courseService: CourseService,
		private _loadingService: LoadingService,
		private _store: Store<TStoreCoursesModule>,
	) {
		this.refreshListCourses();
	}

	public get isLoading() {
		return this._loadingService.isLoading;
	}

	ngOnInit() {
		this.listCourses = this._store.pipe(select(getCoursesList));
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
		// this.listCourses = courses;
		// console.log('courses:', courses);
		this._store.dispatch(setCoursesList({ payload: courses }));
		this._loadingService.finishRequest();
		this._cdRef.markForCheck();
	}


	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}

}
