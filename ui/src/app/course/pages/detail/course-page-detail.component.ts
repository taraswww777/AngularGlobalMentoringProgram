import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from '../../../common/services/user.service';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { TCourse } from '../../models/course';
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
	public course: TCourse;
	public isShowCourse: boolean = false;
	private subs: Subscription[] = [];

	get courseId(): number {
		return _.toNumber(this.routeParams.courseId);
	}

	constructor(
		private route: ActivatedRoute,
		private titleService: Title,
		private userService: UserService,
		private _cdRef: ChangeDetectorRef,
		private _courseService: CourseService,
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
			this._courseService.getCourse(this.courseId)
				.subscribe((course: TCourse) => this._setCourse(course), this._handleNotFound.bind(this))
		);
	}

	private _handleNotFound() {
		this._courseService.redirectToCourses();
	}

	private _setCourse(course: TCourse) {
		this.course = course;
		this.isShowCourse = true;
		this._cdRef.markForCheck();
	}

	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}
}
