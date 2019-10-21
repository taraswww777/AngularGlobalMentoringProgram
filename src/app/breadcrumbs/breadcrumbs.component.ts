import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbsItemComponentProps} from './breadcrumbs-item/breadcrumbs-item.component';

export type BreadcrumbsComponentProps = {
	items: BreadcrumbsItemComponentProps[],
}

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: [
		'./breadcrumbs.component.css',
		'../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
	]
})
export class BreadcrumbsComponent implements OnInit {
	@Input()
	public items: BreadcrumbsItemComponentProps[];

	constructor() {
	}


	ngOnInit() {
	}

}
