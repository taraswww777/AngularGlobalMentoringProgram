import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TranslateModule } from '@ngx-translate/core';

import { CommonModule } from '../common/common.module';
import { LoginFormComponent } from './components/login-form';
import { LoginLinkComponent } from './components/login-link';
import { LogoutLinkComponent } from './components/logout-link';

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
        TranslateModule,
    ],
	exports: components,
	providers: [],
})
export class AuthModule {
}
