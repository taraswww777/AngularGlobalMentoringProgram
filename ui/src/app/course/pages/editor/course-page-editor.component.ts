import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
import { Subscription } from 'rxjs/internal/Subscription';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { CourseEditorMode } from '../../components/editor/editor.component';
import { TCourse } from '../../models/course';
import { CourseService } from '../../services/course.service';

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
		private _cdRef: ChangeDetectorRef,
		private _courseService: CourseService,
	) {
		this._route.params.subscribe((routeParams: RouteParams) => {
			this.routeParams = routeParams;
		});

		this._route.data.subscribe((routeData: RouteData) => {
			this._titleService.setTitle(routeData.title || 'CoursePageEditor');
		});
	}

	ngOnInit() {
		this.mode = this.courseId > 0 ? CourseEditorMode.EDIT : CourseEditorMode.ADD;
		if (this.mode === CourseEditorMode.EDIT) {
			this.subs.push(
				this._courseService.getCourse(this.courseId)
					.subscribe((course: TCourse) => this._setCourse(course), this._handleNotFound.bind(this))
			);
		}
	}

	public doAfterSave(course: TCourse) {
		if (this.mode === CourseEditorMode.ADD) {
			this._courseService.redirectToCourses(course.id);
		}
	}

	private _setCourse(course: TCourse) {
		this.course = course;
		this._cdRef.markForCheck();
	}

	private _handleNotFound() {
		this._courseService.redirectToCourses();
	}

	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}
}
