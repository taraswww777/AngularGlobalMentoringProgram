import {Component, Input, OnInit} from '@angular/core';

export enum LinkTypes {
	'parent' = '_parent',
	'blank' = '_blank',
	'top' = '_top',
	'self' = '_self',
}

export type BreadcrumbsItem = {
	title: string,
	link: string,
	typeOpen: LinkTypes
}

@Component({
	selector: 'app-breadcrumbs-item',
	templateUrl: './breadcrumbs-item.component.html',
	styleUrls: [
		'./breadcrumbs-item.component.css',
	]
})
export class BreadcrumbsItemComponent implements OnInit {
	@Input()
	public breadcrumb: BreadcrumbsItem;

	ngOnInit() {
	}

}
