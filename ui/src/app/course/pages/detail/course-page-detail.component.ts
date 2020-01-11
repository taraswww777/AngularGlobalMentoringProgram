import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from '../../../common/services/user.service';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { getCourses, redirectToCourses } from '../../http/getCourses';
import { TCourse } from '../../models/course';
import { CoursesService } from '../../services/CoursesService';

type RouteParams = { courseId: number };
type RouteData = { title: string };

@Component({
	selector: 'app-course-page-detail',
	templateUrl: './course-page-detail.component.html',
	styleUrls: ['./course-page-detail.component.scss']
})
export class CoursePageDetailComponent implements OnInit, OnDestroy {
	private routeParams: RouteParams;
	public course: TCourse;
	public isShowCourse: boolean = false;
	private subs: Subscription[] = [];

	get courseId(): number {
		return _.toNumber(this.routeParams.courseId);
	}

	constructor(
		private route: ActivatedRoute,
		private titleService: Title,
		private coursesService: CoursesService,
		private userService: UserService,
		private _cdRef: ChangeDetectorRef,
		private _httpClient: HttpClient,
		private _router: Router,
	) {
		this.userService.requiredLogin().then((isLogin) => {
			if (isLogin) {
				this.route.params.subscribe((routeParams: RouteParams) => {
					this.routeParams = routeParams;
				});

				this.route.data.subscribe((routeData: RouteData) => {
					this.titleService.setTitle(routeData.title || 'CoursePageDetail');
				});
			}
		});
	}

	ngOnInit() {
		this.subs.push(
			this.getCourse()
				.subscribe(this.setCourse.bind(this), this._handleNotFound.bind(this))
		);
	}

	private _handleNotFound() {
		redirectToCourses(this._router);
	}

	protected getCourse() {
		return getCourses(this._httpClient, this.courseId);
	}

	private setCourse(course: TCourse) {
		this.course = course;
		this.isShowCourse = true;
		this._cdRef.markForCheck();
	}

	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}
}
