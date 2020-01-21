import { Routes } from '@angular/router';
import { CoursePageDetailComponent, CoursePageEditorComponent, CoursePageListComponent } from './pages';
import { MainGuard } from '../common/guards/main.guard';

export const COURSE_ROUTES: Routes = [
	{
		path: 'courses',
		canActivate: [MainGuard],
		component: CoursePageListComponent, data: { title: 'Курсы' }
	},
	{
		path: 'courses/new',
		canActivate: [MainGuard],
		component: CoursePageEditorComponent, data: { title: 'Создание нового курса' }
	},
	{
		path: 'courses/:courseId/edit',
		canActivate: [MainGuard],
		component: CoursePageEditorComponent, data: { title: 'Редактирование курса' }
	},
	{
		path: 'courses/:courseId',
		canActivate: [MainGuard],
		component: CoursePageDetailComponent, data: { title: 'Детальный просмотр курса' }
	},
];
