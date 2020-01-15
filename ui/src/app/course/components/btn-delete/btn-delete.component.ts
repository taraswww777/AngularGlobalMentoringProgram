import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { deleteCourse, getCourse } from '../../http/courses';
import { TCourse } from '../../models/course';
import _ from 'lodash';

@Component({
	selector: 'course-btn-delete',
	templateUrl: './btn-delete.component.html',
	styleUrls: [
		'./btn-delete.component.css',
	]
})
export class CourseDeleteComponent implements OnInit, OnDestroy {
	@Input() courseId: number;
	@Input() afterDelete: () => void = _.noop;
	private subs: Subscription[] = [];
	public course: TCourse;

	constructor(
		private _cdRef: ChangeDetectorRef,
		private _httpClient: HttpClient
	) {
	}

	ngOnInit() {
	}

	public async onDelete() {
		this.subs.push(getCourse(this._httpClient, this.courseId).subscribe((course: TCourse) => {
			this.setCourse(course);

			if (window.confirm(`You are sure delete course "${course.name}" ?`)) {
				this.subs.push(deleteCourse(this._httpClient, this.courseId).subscribe(() => {
					this.afterDelete();
				}));
			}
		}));
	}

	protected setCourse(course: TCourse) {
		this.course = course;
		this._cdRef.markForCheck();
	}

	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}

}
