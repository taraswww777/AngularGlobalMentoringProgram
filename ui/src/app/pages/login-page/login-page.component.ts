import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { UserService } from '../../common/services';
import { Title } from '@angular/platform-browser';
import { TStoreCommonModule } from '../../common/store';
import { loadUserInfo } from 'src/app/common/store/actions/user.actions';

type RouteData = { title: string };

@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

	constructor(
		private _userService: UserService,
		private _titleService: Title,
		private _route: ActivatedRoute,
		private _router: Router,
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
			loadUserInfo(this._userService, this._store, this._redirectToMain.bind(this));
		});
	}

	private async _redirectToMain() {
		await this._router.navigateByUrl('/');
	}
}
