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
		private router: Router
	) {
	}

	ngOnInit() {
		this.userService.isAuth().then(isAuth => isAuth && this.redirectToMain());
	}


	public async tryLogin(login: string, password: string): Promise<void> {
		const isLogin: boolean = await this.userService.login(login, password);
		if (isLogin) {
			await this.redirectToMain();
		} else {
			console.error('error login');
		}
	}

	private async redirectToMain() {
		await this.router.navigateByUrl('/');
	}
}
