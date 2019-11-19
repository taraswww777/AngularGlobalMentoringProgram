import {Component, Input, OnInit} from '@angular/core';
import {CoursesService} from "../../../services/CoursesService";
import {CourseFormControl} from "../../../models/course";

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
	}

	public async onSubmit() {
		console.log('onSubmit:this.course:', this.course);
	}

	private _isEditMode(): boolean {
		return this.mode === CourseEditorMode.EDIT;
	}

}
