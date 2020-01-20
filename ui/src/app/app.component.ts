import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

import { LinkTypes } from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';
import { BreadcrumbsComponentProps } from './breadcrumbs/breadcrumbs.component';
import { UserService } from './common/services/user.service';

@Component({
	selector: '' +
		'app-root',
	templateUrl: './app.component.html',
	styleUrls: [
		'../../node_modules/bootstrap/dist/css/bootstrap.min.css',
		'../../node_modules/font-awesome5/css/fontawesome-all.min.css',
		'./app.component.css',
	],
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
	public title: string = 'mentoring';
	// TODO: правильно продросить breadcrumbs
	public breadcrumbs: BreadcrumbsComponentProps = {
		items: [
			{
				title: 'Courses',
				link: 'courses',
				typeOpen: LinkTypes.parent,
			}
		]
	};

	constructor(
		private userService: UserService,
	) {
		this.title = 'mentoring';
	}


	public logout() {
		this.userService.logout();
		// TODO: I Know about this is bad practise,
		//  but it's fast resolve issue
		window.location.href = '/';
	}
}
