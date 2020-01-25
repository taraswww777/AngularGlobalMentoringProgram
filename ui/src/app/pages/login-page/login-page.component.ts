import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from '../../common/services';
import { Title } from '@angular/platform-browser';
import { TStoreCommonModule } from '../../common/store';
import { RedirectService } from 'src/app/common/services/redirect';

type RouteData = { title: string };

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

	constructor(
		private _userService: UserService,
		private _redirectService: RedirectService,
		private _titleService: Title,
		private _route: ActivatedRoute,
		private _store: Store<TStoreCommonModule>,
	) {
		this._route.data.subscribe((routeData: RouteData) => {
			this._titleService.setTitle(routeData.title || 'CoursePageDetail');
		});
	}

	ngOnInit() {
	}

	public async tryLogin(login: string, password: string): Promise<void> {
		await this._userService.login(login, password, async () => {
			this._userService.loadUserInfo().subscribe(() => {
				this._redirectService.toMain();
			});
		});
	}
}
