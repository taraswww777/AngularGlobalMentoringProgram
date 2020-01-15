import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../common/services/user.service';


@Component({
	selector: 'app-login-page',
	templateUrl: './login-page.component.html',
	styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

	constructor(
		private userService: UserService,
		private router: Router,
		private _httpClient: HttpClient
	) {
	}

	ngOnInit() {
		this.userService.unRequiredLogin();
	}


	public async tryLogin(login: string, password: string): Promise<void> {
		this.userService.login(this._httpClient, login, password);
	}
}
