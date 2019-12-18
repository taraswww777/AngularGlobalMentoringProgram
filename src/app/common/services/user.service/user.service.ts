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
	public isLogin: boolean = false;

	constructor(
		private cookieService: CookieService,
		private router: Router
	) {
	}

	public async requiredLogin(): Promise<boolean> {
		this.isLogin = await this.isAuth();
		// TODO: add check about current page === login page
		if (!this.isLogin) {
			await this.router.navigate(['/login']);
			return this.isLogin;
		}
		return this.isLogin;
	}

	public async isAuth(): Promise<boolean> {
		let isAuth: boolean = Boolean(this.user) ? Boolean(this.user.id) : false;
		if (!isAuth) {
			isAuth = Boolean(await this._loadCurrentUser());
		}
		return isAuth;
	}

	public async login(login: string, password: string): Promise<boolean> {
		console.log('login:user', login);
		// TODO: unMock
		if (login === tempUser.login && password === 'admin') {
			this.user = tempUser;
			this._setLoginCookie(this.user);
			this.isLogin = true;
		} else {
			this.isLogin = false;
		}
		return this.isLogin;
	}

	public logout() {
		this._deleteLoginCookie();
		this.isLogin = false;
	}

	private async _loadCurrentUser(): Promise<TUser | boolean> {
		const session: string = this._getSessionCookie();
		const login: string = this._getLoginCookie();
		console.log('_loadCurrentUser.session:', session, 'login:', login);
		// TODO: get from BE
		return login === tempUser.login;
	}

	private _setLoginCookie(user: TUser) {
		this.cookieService.set(USER_COOKIE_LOGIN, user.login);
	}


	private _getLoginCookie(): string {
		return this.cookieService.get(USER_COOKIE_LOGIN);
	}

	private _deleteLoginCookie() {
		this.cookieService.delete(USER_COOKIE_LOGIN);
	}

	private _setSessionCookie(session: string) {
		this.cookieService.set(USER_COOKIE_SESSION, session);
	}

	private _getSessionCookie(): string {
		return this.cookieService.get(USER_COOKIE_SESSION);
	}
}
