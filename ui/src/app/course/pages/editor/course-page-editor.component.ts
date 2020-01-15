import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import _ from 'lodash';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from '../../../common/services/user.service';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { CourseEditorMode } from '../../components/editor/editor.component';
import { redirectToCourses, getCourse } from '../../http/courses';
import { TCourse } from '../../models/course';

type RouteParams = { courseId?: number };
type RouteData = { title: string };

@Component({
	selector: 'app-course-page-editor',
	templateUrl: './course-page-editor.component.html',
	styleUrls: ['./course-page-editor.component.scss']
})
export class CoursePageEditorComponent implements OnInit, OnDestroy {
	public mode: CourseEditorMode = CourseEditorMode.ADD;
	private routeParams: RouteParams;
	private subs: Subscription[] = [];
	public course: TCourse;


	get courseId(): number {
		return _.toNumber(this.routeParams.courseId);
	}

	constructor(
		private _route: ActivatedRoute,
		private _titleService: Title,
		private _userService: UserService,
		private _cdRef: ChangeDetectorRef,
		private _httpClient: HttpClient,
		private _router: Router,
	) {
		this._userService.requiredLogin().then((isLogin) => {
			if (isLogin) {
				this._route.params.subscribe((routeParams: RouteParams) => {
					this.routeParams = routeParams;
				});

				this._route.data.subscribe((routeData: RouteData) => {
					this._titleService.setTitle(routeData.title || 'CoursePageEditor');
				});
			}
		});
	}

	ngOnInit() {
		this.mode = this.courseId > 0 ? CourseEditorMode.EDIT : CourseEditorMode.ADD;
		if (this.mode === CourseEditorMode.EDIT) {
			this.subs.push(
				getCourse(this._httpClient, this.courseId)
					.subscribe((course: TCourse) => this._setCourse(course), this._handleNotFound.bind(this))
			);
		}
	}

	public doAfterSave(course: TCourse) {
		if (this.mode === CourseEditorMode.ADD) {
			redirectToCourses(this._router, course.id);
		}
	}

	private _setCourse(course: TCourse) {
		this.course = course;
		this._cdRef.markForCheck();
	}

	private _handleNotFound() {
		redirectToCourses(this._router);
	}

	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}
}
