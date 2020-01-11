import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';
import { LoaderComponent } from './components/loader';
import { RatingComponent } from './components/rating';
import { SearchInputComponent } from './components/search-input';
import { StarComponent } from './components/star';
import { DurationDirective } from './directives/duration';
import { UserService } from './services/user.service';

const components = [
	DurationDirective,
	RatingComponent,
	StarComponent,
	SearchInputComponent,
	LoaderComponent
];

@NgModule({
	declarations: components,
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: [
		components,
	],
	providers: [
		CookieService,
		UserService
	],
})
export class CommonModule {
}
