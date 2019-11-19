import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './logo/logo.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {BreadcrumbsItemComponent} from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';
import {LogoutLinkComponent} from './auth/logout-link/logout-link.component';
import {LoginLinkComponent} from './auth/login-link/login-link.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CoursesService} from 'src/services/CoursesService';

import {CourseModule} from './course/course.module';
import {CommonModule} from './common/common.module';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		LogoComponent,
		BreadcrumbsComponent,
		BreadcrumbsItemComponent,
		LogoutLinkComponent,
		LoginLinkComponent,
	],
	imports: [
		CommonModule,
		CourseModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [
		CoursesService
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
