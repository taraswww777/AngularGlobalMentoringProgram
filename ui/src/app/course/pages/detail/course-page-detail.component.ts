import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
import { Subscription } from 'rxjs/internal/Subscription';
import { BASE_URL } from '../../../common/consts';
import { UserService } from '../../../common/services/user.service';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { joinUrl } from '../../../common/utils/string';
import { getCourses } from '../../http/getCourses';
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
		private _httpClient: HttpClient
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
		this.loadCourse().then(() => {
			this.isShowCourse = true;
			this._cdRef.markForCheck();
		}).catch((e: Error) => {
			console.error('Ошибка получения информации о курсе:', e.message);
		});
	}

	private async loadCourse() {
		this.subs.push(this.getCourse().subscribe(this.setCourse.bind(this)));
	}

	protected getCourse() {
		return getCourses(this._httpClient, this.courseId);
	}

	private setCourse(course: TCourse) {
		this.course = course;
		this._cdRef.markForCheck();
	}

	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}
}
