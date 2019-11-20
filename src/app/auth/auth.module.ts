import {NgModule} from '@angular/core';

import {CommonModule} from '../common/common.module';
import {LogoutLinkComponent} from "./components/logout-link/logout-link.component";
import {LoginLinkComponent} from './components/login-link/login-link.component';
import {LoginFormComponent} from './components/login-form/login-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";

const components = [
	LogoutLinkComponent,
	LoginLinkComponent,
	LoginFormComponent
];

@NgModule({
	declarations: components,
	imports: [
		CommonModule,
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
	],
	exports: components,
	providers: [],
})
export class AuthModule {
}
