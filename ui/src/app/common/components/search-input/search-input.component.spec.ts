import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {SearchInputComponent} from './search-input.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";

describe('SearchInputComponent', () => {
	let component: SearchInputComponent;
	let fixture: ComponentFixture<SearchInputComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [SearchInputComponent],
			schemas: [CUSTOM_ELEMENTS_SCHEMA],
			imports: [
				BrowserModule,
				FormsModule,
				ReactiveFormsModule
			],
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(SearchInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
