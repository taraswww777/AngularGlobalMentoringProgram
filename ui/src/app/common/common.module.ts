import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { ErrorsInputComponent } from './components/form-elements';
import { LoaderComponent } from './components/loader';
import { RatingComponent } from './components/rating';
import { SearchInputComponent } from './components/search-input';
import { StarComponent } from './components/star';
import { DurationDirective } from './directives/duration';
import { UpperFirstCasePipe } from './pipes/first-case.pipe';
import { UserService, LoadingService } from './services';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ShortUserInfoComponent } from './components/short-user-info/short-user-info.component';
import { COMMON_MODULE_NAME } from './config';
import { commonReducers } from './store/reducers/user.reducer';
import { RedirectService } from './services/redirect';

const components = [
	DurationDirective,
	RatingComponent,
	StarComponent,
	SearchInputComponent,
	LoaderComponent,
	ShortUserInfoComponent,
	ErrorsInputComponent,
	UpperFirstCasePipe,
];

@NgModule({
	declarations: components,
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		StoreModule.forFeature(COMMON_MODULE_NAME, commonReducers),
	],
	exports: [
		components,
	],
	providers: [
		CookieService,
		UserService,
		RedirectService,
		LoadingService,
		{
			provide: HTTP_INTERCEPTORS,
			useClass: AuthInterceptor,
			multi: true
		}
	],
})
export class CommonModule {
}
