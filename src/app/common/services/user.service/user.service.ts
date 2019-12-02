import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


const USER_COOKIE_LOGIN = 'user.login';
const USER_COOKIE_SESSION = 'user.session';

type TUser = { login: string, id: number };

const tempUser: TUser = {
	id: 123,
	login: 'admin',
};

@Injectable({
	providedIn: 'root'
})
export class UserService {
	public user: TUser;


	constructor(
		private cookieService: CookieService,
		private router: Router
	) {
	}

	public async requiredLogin(): Promise<boolean> {
		const isAuth = await this.isAuth();
		// TODO: add check about current page === login page
		if (!isAuth) {
			await this.router.navigate(['/login']);
			return isAuth;
		}
		return isAuth;
	}

	public async isAuth(): Promise<boolean> {
		let isAuth: boolean = Boolean(this.user) ? Boolean(this.user.id) : false;
		if (!isAuth) {
			isAuth = Boolean(await this._loadCurrentUser());
		}
		return isAuth;
	}

	public async login(login: string, password: string): Promise<boolean> {
		// TODO: unMock
		if (login === tempUser.login && password === 'admin') {
			this.user = tempUser;
			this._setLoginCookie(this.user);
			return true;
		}
		return false;
	}

	private async _loadCurrentUser(): Promise<TUser | boolean> {
		const session: string = this._getSessionCookie();
		const login: string = this._getLoginCookie();
		console.log('session', session, 'login:', login);
		// TODO: get from BE
		return login === tempUser.login;
	}

	private _setLoginCookie(user: TUser) {
		this.cookieService.set(USER_COOKIE_LOGIN, user.login);
	}


	private _getLoginCookie(): string {
		return this.cookieService.get(USER_COOKIE_LOGIN);
	}

	private _setSessionCookie(session: string) {
		this.cookieService.set(USER_COOKIE_SESSION, session);
	}

	private _getSessionCookie(): string {
		return this.cookieService.get(USER_COOKIE_SESSION);
	}
}
