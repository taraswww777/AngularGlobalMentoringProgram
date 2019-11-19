import {Component, Input, OnInit} from '@angular/core';
import {CourseFormControl, TCourse} from "../../models/course";
import {CoursesService} from "../../services/CoursesService";

export enum CourseEditorMode {
	ADD = 'ADD',
	EDIT = 'EDIT',
}

@Component({
	selector: 'course-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss']
})
export class CourseEditorComponent implements OnInit {
	@Input() public mode: CourseEditorMode;
	@Input() public courseId?: number;
	public titleSubmit: string = 'Сохранить';
	public titleEditor: string = 'Создание';
	public course: CourseFormControl = new CourseFormControl();

	private _courseService: CoursesService;

	constructor(
		courseService: CoursesService
	) {
		this._courseService = courseService;
	}

	ngOnInit() {
		this.titleSubmit = this._isEditMode() ? 'Сохранить' : 'Создать';
		this.titleEditor = this._isEditMode() ? 'Редактирование' : 'Создание';

		if (this._isEditMode()) {
			this._courseService.getById(this.courseId).then((course: TCourse) => {
				this.course = new CourseFormControl(course);
			});
		}
	}


	public async onSubmit() {
		if (this._isEditMode()) {
			this._courseService.update(this.courseId, this.course.toJsonObject())
				.then((course: TCourse) => {
					console.log('CourseEditorComponent.onSubmit.course:', course);
				});
		} else {
			this._courseService.add(this.course.toJsonObject())
				.then((course: TCourse) => {
					console.log('CourseEditorComponent.onSubmit.course:', course);
				});
		}
	}

	private _isEditMode(): boolean {
		return this.mode === CourseEditorMode.EDIT;
	}

}
