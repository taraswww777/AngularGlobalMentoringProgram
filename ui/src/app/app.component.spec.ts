import { BrowserModule } from '@angular/platform-browser';
import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
// app
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CommonModule } from './common/common.module';
import { SearchInputComponent } from './common/components/search-input';
import { CourseModule } from './course/course.module';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { BreadcrumbsItemComponent } from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';
// import { CoursesAddComponent } from './courses-add/courses-add.component';
// import { PageCoursesComponent } from './page-courses/page-courses.component';
// import { CoursesListComponent } from './courses-list/courses-list.component';
// import { CoursesItemComponent } from './courses-item/courses-item.component';
// import { LogoutLinkComponent } from './auth/logout-link/logout-link.component';
// import { LoginLinkComponent } from './auth/login-link/login-link.component';
// import { SearchInputComponent } from './search-input/search-input.component';
// import { CoursesEditComponent } from './courses-edit/courses-edit.component';
// import { CoursesDeleteComponent } from './courses-delete/courses-delete.component';
// import { CoursesLoadMoreComponent } from './courses-load-more/courses-load-more.component';
// import { LoaderComponent } from './common/components/loader';
// import { LogoutLinkComponent } from './auth/components/logout-link';
// import { LoginLinkComponent } from './auth/components/login-link';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './routes';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			declarations: [
				AppComponent,
				HeaderComponent,
				FooterComponent,
				LogoComponent,
				BreadcrumbsComponent,
				BreadcrumbsItemComponent,
			],
			imports: [
				BrowserModule,
				FormsModule,
				ReactiveFormsModule,
				CommonModule,
				AuthModule,
				PagesModule,
				CourseModule,
				StoreModule.forRoot([]),
				RouterModule.forRoot(APP_ROUTES, {
					// enableTracing: true,
					useHash: true,
					// preloadingStrategy: PreloadAllModules
				})
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
