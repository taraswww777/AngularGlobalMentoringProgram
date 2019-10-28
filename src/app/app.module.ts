import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './logo/logo.component';
import {PageCoursesComponent} from './page-courses/page-courses.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {BreadcrumbsItemComponent} from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';
import {CoursesListComponent} from './courses-list/courses-list.component';
import {CoursesItemComponent} from './courses-item/courses-item.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		LogoComponent,
		PageCoursesComponent,
		BreadcrumbsComponent,
		BreadcrumbsItemComponent,
		CoursesListComponent,
		CoursesItemComponent,
		CoursesItemComponent,
	],
	imports: [
		BrowserModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
