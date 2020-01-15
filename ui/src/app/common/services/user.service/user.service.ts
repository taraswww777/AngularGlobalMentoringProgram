import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { httpLogin, TLoginResponse } from '../../../http/login';
import { arrayUnsubscribe } from '../../utils/array';


const USER_COOKIE_TOKEN = 'user.token';

@Injectable({
	providedIn: 'root'
})
export class UserService {
	public isLogin: boolean = false;
	public token: string = '';

	constructor(
		private cookieService: CookieService,
		private router: Router,
	) {
	}

	public unRequiredLogin() {
		this.isAuth().then(async (isAuth) => {
			if (isAuth) {
				await this.router.navigate(['/']);
			}
		});
	}

	public requiredLogin(): Promise<boolean> {
		return this.isAuth().then(async (isAuth) => {
			if (!isAuth) {
				await this.router.navigate(['/login']);
			}
			return isAuth;
		});

	}

	public async isAuth(): Promise<boolean> {
		const token = this._getTokenCookie();
		// TODO: Think how do better
		if (token) {
			this.isLogin = true;
		}
		if (!this.token) {
			this.token = token;
		}
		// TODO: maybe need add check actual token
		return Boolean(token);
	}

	public login(httpClient: HttpClient, login: string, password: string) {
		const sub = httpLogin(httpClient, login, password).subscribe(async (resp: TLoginResponse) => {
			this._loginSuccess(resp.token);
			arrayUnsubscribe([sub]);
			await this.redirectToMain();
		}, (error: HttpErrorResponse) => {
			alert('Error: ' + error.error);
			this._loginFailed();
		});
	}

	private _loginSuccess(token: string) {
		this._setTokenCookie(token);
		this.isLogin = true;
	}

	private _loginFailed() {
		this.isLogin = false;
		this.token = undefined;
	}

	public logout() {
		this.isLogin = false;
		this._deleteTokenCookie();
	}


	private _setTokenCookie(token: string) {
		this.cookieService.set(USER_COOKIE_TOKEN, token);
	}

	private _getTokenCookie(): string {
		return this.cookieService.get(USER_COOKIE_TOKEN);
	}

	private _deleteTokenCookie() {
		this.cookieService.delete(USER_COOKIE_TOKEN);
	}

	private async redirectToMain() {
		await this.router.navigateByUrl('/');
	}
}
