import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DurationDirective} from "./directives/duration";
import {RatingComponent} from './rating/rating.component';
import {StarComponent} from './star/star.component';
import {SearchInputComponent} from './search-input/search-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LoaderComponent} from "./loader/loader.component";

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
	exports: components,
	providers: [],
})
export class CommonModule {
}
