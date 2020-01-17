import { Routes } from '@angular/router';
import { CoursePageDetailComponent, CoursePageEditorComponent, CoursePageListComponent } from './pages';

export const COURSE_ROUTES: Routes = [
	{ path: 'courses', component: CoursePageListComponent, data: { title: 'Курсы' } },
	{ path: 'courses/new', component: CoursePageEditorComponent, data: { title: 'Создание нового курса' } },
	{ path: 'courses/:courseId/edit', component: CoursePageEditorComponent, data: { title: 'Редактирование курса' } },
	{ path: 'courses/:courseId', component: CoursePageDetailComponent, data: { title: 'Детальный просмотр курса' } },
];
