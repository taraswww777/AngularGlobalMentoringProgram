import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BreadcrumbsComponent} from './breadcrumbs.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {BreadcrumbsItemComponent} from "./breadcrumbs-item/breadcrumbs-item.component";

describe('BreadcrumbsComponent', () => {
	let component: BreadcrumbsComponent;
	let fixture: ComponentFixture<BreadcrumbsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [
				BreadcrumbsComponent,
				BreadcrumbsItemComponent
			],
			schemas: [CUSTOM_ELEMENTS_SCHEMA]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(BreadcrumbsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
