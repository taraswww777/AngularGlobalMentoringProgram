import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

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
})
export class AppComponent {
	public isAuth: boolean = false;
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
		private router: Router,
	) {
		this.title = 'mentoring';
		this.userService.isAuth().then((isAuth: boolean) => {
			this.isAuth = isAuth;
			if (!isAuth) {
				this.router.navigate(['/login']).catch((e: Error) => {
					console.log('e:', e);
				});
			}
		});
	}

}
