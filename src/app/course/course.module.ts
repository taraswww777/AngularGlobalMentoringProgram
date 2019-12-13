import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CommonModule} from '../common/common.module';
import {CoursesService} from './services/CoursesService';
import {CourseEditorComponent} from './components/editor/editor.component';
import {CourseBtnEditComponent} from './components/btn-edit/btn-edit.component';
import {CourseAddComponent} from './components/btn-add/btn-add.component';
import {CourseDeleteComponent} from "./components/btn-delete/btn-delete.component";
import {CourseListComponent} from './components/list/list.component';
import {CourseItemComponent} from './components/item/item.component';
import {FreshCourseDirective} from './components/directives/fresh-course';
import {CourseLoadMoreComponent} from './components/btn-load-more/btn-load-more.component';
import {CoursePageListComponent} from './components/page-list/page-list.component';

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
