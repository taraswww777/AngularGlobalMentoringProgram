import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import _ from 'lodash';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs/internal/Subscription';
import { LoadingService } from '../../../common/services';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { TStoreCoursesModule } from '../../store/index.types';
import { setCourseDetail } from '../../store/reducers/courses.reducer';
import { getCourseDetail } from '../../store/selectors';
import { TCourse } from '../../types';
import { CourseService } from '../../services/course.service';

type RouteParams = { courseId: number };
type RouteData = { title: string };

@Component({
	selector: 'app-course-page-detail',
	templateUrl: './course-page-detail.component.html',
	styleUrls: ['./course-page-detail.component.scss']
})
export class CoursePageDetailComponent implements OnInit, OnDestroy {
	private routeParams: RouteParams;
	public course: Observable<TCourse>;
	private subs: Subscription[] = [];

	get courseId(): number {
		return _.toNumber(this.routeParams.courseId);
	}

	constructor(
		private route: ActivatedRoute,
		private titleService: Title,
		private _cdRef: ChangeDetectorRef,
		private _courseService: CourseService,
		private _loadingService: LoadingService,
		private _store: Store<TStoreCoursesModule>,
	) {
		this.route.params.subscribe((routeParams: RouteParams) => {
			this.routeParams = routeParams;
		});

		this.route.data.subscribe((routeData: RouteData) => {
			this.titleService.setTitle(routeData.title || 'CoursePageDetail');
		});
	}

	public get isLoading() {
		return this._loadingService.isLoading;
	}

	ngOnInit() {

		this.course = this._store.pipe(select(getCourseDetail));

		this._loadCourse();
	}

	private _loadCourse() {
		this._loadingService.startRequest();
		this.subs.push(
			this._courseService.getCourse(this.courseId)
				.subscribe((course: TCourse) => this._setCourse(course), this._handleNotFound.bind(this))
		);
	}

	private _handleNotFound() {
		this._courseService.redirectToCourses();
	}

	private _setCourse(course: TCourse) {
		this._store.dispatch(setCourseDetail({ payload: course }));
		this._loadingService.finishRequest();
		this._cdRef.markForCheck();
	}

	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}
}
