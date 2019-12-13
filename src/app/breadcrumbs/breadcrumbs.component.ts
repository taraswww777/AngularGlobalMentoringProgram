import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbsItem} from './breadcrumbs-item/breadcrumbs-item.component';

export type BreadcrumbsComponentProps = {
	items: BreadcrumbsItem[],
}

@Component({
	selector: 'app-breadcrumbs',
	templateUrl: './breadcrumbs.component.html',
	styleUrls: [
		'./breadcrumbs.component.css',
	]
})
export class BreadcrumbsComponent implements OnInit {
	@Input()
	public items: BreadcrumbsItem[];

	ngOnInit() {
	}

}
