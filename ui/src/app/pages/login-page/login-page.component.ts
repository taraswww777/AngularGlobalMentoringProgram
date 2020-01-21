import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../common/services';
import { Title } from '@angular/platform-browser';

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
	) {
		this._route.data.subscribe((routeData: RouteData) => {
			this._titleService.setTitle(routeData.title || 'CoursePageDetail');
		});
	}

	ngOnInit() {
	}


	public async tryLogin(login: string, password: string): Promise<void> {
		this._userService.login(login, password);
	}
}
