import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {CoursesService} from 'src/services/CoursesService';
import {CourseEditorComponent} from './editor/editor.component';
import {CourseBtnEditComponent} from './btn-edit/btn-edit.component';
import {CourseAddComponent} from './btn-add/btn-add.component';
import {CourseDeleteComponent} from "./btn-delete/btn-delete.component";
import {CourseListComponent} from './list/list.component';
import {CourseItemComponent} from './item/item.component';
import {CommonModule} from '../common/common.module';
import {FreshCourseDirective} from './directives/fresh-course';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CourseLoadMoreComponent} from './btn-load-more/btn-load-more.component';
import {CoursePageListComponent} from './page-list/page-list.component';

@NgModule({
	declarations: [
		CourseEditorComponent,
		CourseBtnEditComponent,
		CourseAddComponent,
		CourseDeleteComponent,
		CourseListComponent,
		CourseItemComponent,
		FreshCourseDirective,
		CourseLoadMoreComponent,
		CoursePageListComponent
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [
		CoursePageListComponent,
		CourseEditorComponent,
		CourseAddComponent,
		CourseListComponent,
	],
	providers: [
		CoursesService
	],
})
export class CourseModule {
}
