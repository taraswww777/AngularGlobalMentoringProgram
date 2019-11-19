import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DurationDirective} from "./directives/duration";
import {RatingComponent} from './rating/rating.component';
import {StarComponent} from './star/star.component';

@NgModule({
	declarations: [
		DurationDirective,
		RatingComponent,
		StarComponent,
	],
	imports: [
		BrowserModule,
	],
	exports: [
		DurationDirective,
		RatingComponent,
		StarComponent,
	],
	providers: [],
})
export class CommonModule {
}
