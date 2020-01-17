import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from '../auth/auth.module';
import { HomePageComponent } from './home-page';
import { LoginPageComponent } from './login-page';

const pages = [
	HomePageComponent,
	LoginPageComponent
];

@NgModule({
	declarations: pages,
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		AuthModule
	],
	exports: pages
})
export class PagesModule {
}
