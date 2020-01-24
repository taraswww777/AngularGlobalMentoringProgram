import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';

import { LinkTypes } from './breadcrumbs/breadcrumbs-item/breadcrumbs-item.component';
import { BreadcrumbsComponentProps } from './breadcrumbs/breadcrumbs.component';
import { UserService } from './common/services';
import { TStoreCommonModule } from './common/store';
import { TStoreCoursesModule } from './course/store/index.types';

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
	// TODO: правильно пробросить breadcrumbs
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
		private _userService: UserService,
		private _store: Store<TStoreCommonModule & TStoreCoursesModule>,
	) {
		this.title = 'mentoring';
		this._userService.loadUserInfo();
	}

	public logout() {
		this._userService.logout();
		// TODO: I Know about this is bad practise,
		//  but it's fast resolve issue
		window.location.href = '/';
	}
}
