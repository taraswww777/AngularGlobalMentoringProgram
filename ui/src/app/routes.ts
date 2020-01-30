import { Routes } from '@angular/router';
import { LoginGuard } from './common/guards/login.guard';
import { HomePageComponent } from './pages/home-page';
import { LoginPageComponent } from './pages/login-page';

export const APP_ROUTES: Routes = [
	{ path: '', redirectTo: 'courses', pathMatch: 'full' },
	{
		path: 'home',
		component: HomePageComponent
	},
	{
		path: 'login',
		canActivate: [LoginGuard],
		component: LoginPageComponent, data: { title: 'Авторизация' }
	}
];
