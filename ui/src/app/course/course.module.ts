import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { CommonModule } from '../common/common.module';
import { CourseAddComponent } from './components/btn-add/btn-add.component';
import { CourseDeleteComponent } from './components/btn-delete/btn-delete.component';
import { CourseBtnEditComponent } from './components/btn-edit/btn-edit.component';
import { CourseLoadMoreComponent } from './components/btn-load-more/btn-load-more.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { FreshCourseDirective } from './components/directives/fresh-course';
import { CourseEditorComponent } from './components/editor/editor.component';
import { CourseItemComponent } from './components/item/item.component';
import { CourseListComponent } from './components/list/list.component';
import { CoursePageDetailComponent, CoursePageEditorComponent, CoursePageListComponent } from './pages';
import { COURSE_ROUTES } from './routes';
import { CoursesService } from './services/CoursesService';

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
		CoursePageListComponent,
		CoursePageDetailComponent,
		CoursePageEditorComponent,
		CourseDetailComponent,
	],
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		RouterModule.forChild(COURSE_ROUTES),
		HttpClientModule
	],
	exports: [
		CoursePageListComponent,
		CourseEditorComponent,
		CourseAddComponent,
		CourseListComponent,
		CoursePageDetailComponent,
		CoursePageEditorComponent,
	],
	providers: [
		CoursesService
	],
})
export class CourseModule {
}
