import {Component, ViewEncapsulation} from '@angular/core';
import {BreadcrumbsComponentProps} from './breadcrumbs/breadcrumbs.component';
import {LinkTypes} from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'../../node_modules/bootstrap/dist/css/bootstrap.min.css',
		'../../node_modules/font-awesome5/css/fontawesome-all.min.css',
		'./app.component.css',
	],
	encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
	public title: string = 'mentoring';

	public breadcrumbs: BreadcrumbsComponentProps = {
		items: [
			{
				title: 'Courses',
				link: '/#',
				typeOpen: LinkTypes.parent,
			}
		]
	};

	constructor() {
		this.title = 'mentoring';
	}
}
