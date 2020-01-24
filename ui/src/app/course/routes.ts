import { Routes } from '@angular/router';
import { CoursePageDetailComponent, CoursePageEditorComponent, CoursePageListComponent } from './pages';
import { LoginGuard } from '../common/guards/login.guard';

export const COURSE_ROUTES: Routes = [
	{
		path: 'courses',
		canActivate: [LoginGuard],
		component: CoursePageListComponent, data: { title: 'Курсы' }
	},
	{
		path: 'courses/new',
		canActivate: [LoginGuard],
		component: CoursePageEditorComponent, data: { title: 'Создание нового курса' }
	},
	{
		path: 'courses/:courseId/edit',
		canActivate: [LoginGuard],
		component: CoursePageEditorComponent, data: { title: 'Редактирование курса' }
	},
	{
		path: 'courses/:courseId',
		canActivate: [LoginGuard],
		component: CoursePageDetailComponent, data: { title: 'Детальный просмотр курса' }
	},
];
