import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {LogoComponent} from './logo/logo.component';
import {BreadcrumbsComponent} from './breadcrumbs/breadcrumbs.component';
import {BreadcrumbsItemComponent} from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CourseModule} from './course/course.module';
import {CommonModule} from './common/common.module';
import {AuthModule} from "./auth/auth.module";

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FooterComponent,
		LogoComponent,
		BreadcrumbsComponent,
		BreadcrumbsItemComponent,
	],
	imports: [
		CommonModule,
		CourseModule,
		AuthModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
