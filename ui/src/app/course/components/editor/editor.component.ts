import _ from 'lodash';
import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Subscription } from 'rxjs/internal/Subscription';

import { arrayUnsubscribe } from '../../../common/utils/array';
import { CourseService } from '../../services/course.service';
import { TStoreCoursesModule } from '../../store/index.types';
import { setCourseDetail } from '../../store/reducers/courses.reducer';
import { getCourseDetail } from '../../store/selectors';
import { TAuthors, TCourse } from '../../types';
import { COURSES_MODULE_DATE_REGEXP } from '../../config';
import { normaliserDateDDMMYYYY } from '../../../common/utils/string';
import { DurationValidators } from '../form-elements';

export enum CourseEditorMode {
	ADD = 'ADD',
	EDIT = 'EDIT',
}

enum formFields {
	name = 'name',
	description = 'description',
	date = 'date',
	duration = 'duration',
	isTopRated = 'isTopRated',
	authors = 'authors'
}

@Component({
	selector: 'course-editor',
	templateUrl: './editor.component.html',
	styleUrls: ['./editor.component.scss']
})
export class CourseEditorComponent implements OnInit, OnDestroy {
	@Input() public mode: CourseEditorMode;
	@Input() public courseId?: number;
	@Input() public doAfterSave: (Course) => void = _.noop;

	public titleSubmit: string = 'Сохранить';
	public titleEditor: string = 'Создание';
	public course: TCourse;
	public isLoading = false;
	public formGroup: FormGroup;
	public formFields = formFields;
	private subs: Subscription[] = [];

	private authors: TAuthors[];
	private isTopRated: boolean;

	constructor(
		private _cdRef: ChangeDetectorRef,
		private _courseService: CourseService,
		private _store: Store<TStoreCoursesModule>,
		private _formBuilder: FormBuilder,
		private _datePipe: DatePipe,
	) {
		this._createFormGroup();
	}

	ngOnInit() {
		this.titleSubmit = this._isEditMode() ? 'Сохранить' : 'Создать';
		this.titleEditor = this._isEditMode() ? 'Редактирование' : 'Создание';

		if (this._isEditMode()) {
			this._startLoading();
			this._store.pipe(select(getCourseDetail)).subscribe((course: TCourse) => {
				this._setCourse(course);
			});
			this._loadCourse();
		}
	}

	private _createFormGroup() {
		this.formGroup = this._formBuilder.group({
			[formFields.name]: ['name...', [Validators.maxLength(50), Validators.required]],
			[formFields.description]: ['description...', [
				Validators.maxLength(500), Validators.required]
			],
			[formFields.date]: ['13/05/2019', [
				Validators.pattern(COURSES_MODULE_DATE_REGEXP),
				Validators.maxLength(10),
				Validators.required,
			]],
			[formFields.duration]: [null, [
				...DurationValidators,
				Validators.required
			]]
		});
	}

	private _loadCourse() {
		this.subs.push(
			this._courseService.getCourse(this.courseId)
				.subscribe((course: TCourse) => {
					this._store.dispatch(setCourseDetail({ payload: course }));
					this._stopLoading();
				}, this._handleNotFound.bind(this))
		);
	}

	public onSubmit() {
		// if (confirm('U`re sure?')) {
		this._onSubmit();
		// }
	}

	private _onSubmit() {
		const course = this._getCourse();
		console.log('_onSubmit:this.course:', course);
		// if (this._isEditMode()) {
		// 	this._startLoading();
		// 	this.subs.push(
		// 		this._courseService.updateCourse(this.courseId, course)
		// 			.subscribe((course: TCourse) => this._onSubscribeUpdate(course), this._handleNotFound.bind(this))
		// 	);
		// } else {
		// 	this.subs.push(
		// 		this._courseService.addCourse(course)
		// 			.subscribe((course: TCourse) => this._onSubscribeAdd(course), this._handleNotFound.bind(this))
		// 	);
		// }
	}

	// region setters
	set name(name: string) {
		this.formGroup.get(formFields.name).setValue(name);
	}

	set duration(duration: number) {
		this.formGroup.get(formFields.duration).setValue(duration);
	}

	set date(date: string) {
		const dateTime = new Date(date || new Date().getFullYear() + '-01-01T00:00:00');
		const prepareDate = this._datePipe.transform(dateTime, 'dd/MM/yyyy');
		this.formGroup.get(formFields.date).setValue(prepareDate);
	}

	set description(description: string) {
		this.formGroup.get(formFields.description).setValue(description);
	}

	// endregion

	// region getters
	get name(): string {
		return this.formGroup.get(formFields.name).value;
	}

	get duration(): number {
		return this.formGroup.get(formFields.duration).value;
	}

	get date(): string {
		return this.formGroup.get(formFields.date).value;
	}

	get description(): string {
		return this.formGroup.get(formFields.description).value;
	}

	// endregion

	private _setCourse(course: TCourse) {
		this.name = course.name;
		this.description = course.description;
		this.date = course.date;
		this.duration = course.length;
		this.authors = course.authors;
		this.isTopRated = course.isTopRated;

		// console.log('course:', course);
		// this.course = new CourseFormControl(course);
		this._cdRef.markForCheck();
	}

	private _getCourse(): TCourse {
		return {
			id: this.courseId,
			name: this.name,
			description: this.description,
			date: normaliserDateDDMMYYYY(this.date),
			length: this.duration,
			authors: this.authors || [],
			isTopRated: this.isTopRated || false,
		};
	}

	private _handleNotFound() {
		this._stopLoading();
		this._cdRef.markForCheck();
	}

	private _startLoading() {
		this.isLoading = true;
	}

	private _stopLoading() {
		this.isLoading = false;
	}

	private _onSubscribeAdd(course: TCourse) {
		alert(`Success updated course "${course.name}"`);
		this._stopLoading();
		this.doAfterSave(course);
		this._cdRef.markForCheck();
	}

	private _onSubscribeUpdate(course: TCourse) {
		alert(`Success updated course "${course.name}"`);
		this._stopLoading();
		this.doAfterSave(course);
		this._cdRef.markForCheck();
	}

	private _isEditMode(): boolean {
		return this.mode === CourseEditorMode.EDIT;
	}

	ngOnDestroy(): void {
		arrayUnsubscribe(this.subs);
	}
}
