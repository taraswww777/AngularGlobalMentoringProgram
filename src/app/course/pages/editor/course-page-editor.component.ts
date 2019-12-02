import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
import { UserService } from '../../../common/services/user.service';
import { CourseEditorMode } from '../../components/editor/editor.component';

type RouteParams = { courseId?: number };
type RouteData = { title: string };

@Component({
	selector: 'app-course-page-editor',
	templateUrl: './course-page-editor.component.html',
	styleUrls: ['./course-page-editor.component.scss']
})
export class CoursePageEditorComponent implements OnInit {
	public mode: string = CourseEditorMode.ADD;
	private routeParams: RouteParams;

	get courseId(): number {
		return _.toNumber(this.routeParams.courseId);
	}

	constructor(
		private route: ActivatedRoute,
		private titleService: Title,
		private userService: UserService
	) {
		this.userService.requiredLogin().then((isLogin) => {
			if (isLogin) {
				this.route.params.subscribe((routeParams: RouteParams) => {
					this.routeParams = routeParams;
				});

				this.route.data.subscribe((routeData: RouteData) => {
					this.titleService.setTitle(routeData.title || 'CoursePageEditor');
				});
			}
		});
	}

	ngOnInit() {
		this.mode = this.courseId > 0 ? CourseEditorMode.EDIT : CourseEditorMode.ADD;
		// if (this.mode === CourseEditorMode.EDIT) {}
	}

}
