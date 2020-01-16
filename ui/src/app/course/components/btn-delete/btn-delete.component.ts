import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { arrayUnsubscribe } from '../../../common/utils/array';
import { TCourse } from '../../models/course';
import _ from 'lodash';
import { CourseService } from '../../services/course.service';

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
		private _courseService: CourseService,
	) {
	}

	ngOnInit() {
	}

	public async onDelete() {
		this.subs.push(this._courseService.getCourse(this.courseId).subscribe((course: TCourse) => {
			this.setCourse(course);

			if (window.confirm(`You are sure delete course "${course.name}" ?`)) {
				this.subs.push(this._courseService.deleteCourse(this.courseId).subscribe(() => {
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
