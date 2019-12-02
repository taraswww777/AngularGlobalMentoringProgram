import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import _ from 'lodash';
import { UserService } from '../../../common/services/user.service';
import { Course } from '../../models/course';
import { CoursesService } from '../../services/CoursesService';

type RouteParams = { courseId: number };
type RouteData = { title: string };

@Component({
	selector: 'app-course-page-detail',
	templateUrl: './course-page-detail.component.html',
	styleUrls: ['./course-page-detail.component.scss']
})
export class CoursePageDetailComponent implements OnInit {
	private routeParams: RouteParams;
	public course: Course;

	get courseId(): number {
		return _.toNumber(this.routeParams.courseId);
	}

	constructor(
		private route: ActivatedRoute,
		private titleService: Title,
		private coursesService: CoursesService,
		private userService: UserService
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
		this.loadCourse().catch((e: Error) => {
			console.error('Ошибка получения информации о курсе:', e.message);
		});
	}

	private async loadCourse() {
		this.course = new Course(await this.coursesService.getById(this.courseId));
	}
}
