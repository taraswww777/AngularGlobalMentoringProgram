import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { BreadcrumbsItemComponent } from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { CommonModule } from './common/common.module';

import { CourseModule } from './course/course.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { PagesModule } from './pages/pages.module';
import { APP_ROUTES } from './routes';

export function httpLoaderFactory(httpClient: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(httpClient);
}

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
		PagesModule,
		CourseModule,
		AuthModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpClientModule,
		StoreModule.forRoot([]),
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: httpLoaderFactory,
				deps: [HttpClient]
			}
		}),
		RouterModule.forRoot(APP_ROUTES, {
			// enableTracing: true,
			useHash: true,
			// preloadingStrategy: PreloadAllModules
		})
	],
	bootstrap: [AppComponent],
})
export class AppModule {
}
