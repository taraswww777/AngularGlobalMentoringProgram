import {async, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {CoursesAddComponent} from './courses-add/courses-add.component';
import {LogoComponent} from "./logo/logo.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FooterComponent} from "./footer/footer.component";
import {PageCoursesComponent} from "./page-courses/page-courses.component";
import {BreadcrumbsComponent} from "./breadcrumbs/breadcrumbs.component";
import {BreadcrumbsItemComponent} from "./breadcrumbs/breadcrumbs-item/breadcrumbs-item.component";
import {CoursesListComponent} from "./courses-list/courses-list.component";
import {CoursesItemComponent} from "./courses-item/courses-item.component";
import {LogoutLinkComponent} from "./auth/logout-link/logout-link.component";
import {LoginLinkComponent} from "./auth/login-link/login-link.component";
import {SearchInputComponent} from "./search-input/search-input.component";
import {CoursesEditComponent} from "./courses-edit/courses-edit.component";
import {CoursesDeleteComponent} from "./courses-delete/courses-delete.component";
import {CoursesLoadMoreComponent} from "./courses-load-more/courses-load-more.component";
import {LoaderComponent} from "./loader/loader.component";
import {BrowserModule} from "@angular/platform-browser";

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
				LogoutLinkComponent,
				LoginLinkComponent,
				SearchInputComponent,
				CoursesAddComponent,
				CoursesEditComponent,
				CoursesDeleteComponent,
				CoursesLoadMoreComponent,
				LoaderComponent,
			],
			imports: [
				BrowserModule,
				FormsModule,
				ReactiveFormsModule
			]
		}).compileComponents();
	}));

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	});

	it(`should have as title 'mentoring'`, () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app.title).toEqual('mentoring');
	});

	// it('should render title', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.debugElement.nativeElement;
	// 	expect(compiled.querySelector('.content span').textContent).toContain('mentoring app is running!');
	// });
});
