import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subscriber } from 'rxjs';
import { BASE_URL } from '../../consts';
import { arrayUnsubscribe } from '../../utils/array';
import { joinUrl } from '../../utils/string';


const USER_COOKIE_TOKEN = 'user.token';

export type TLoginResponse = { token: string }

@Injectable({
	providedIn: 'root'
})
export class UserService {
	public isLogin: boolean = false;
	public token: string = '';

	constructor(
		private _cookieService: CookieService,
		private _router: Router,
		private _httpClient: HttpClient
	) {
	}

	public isAuthenticated(): Observable<boolean> {
		return new Observable((subscriber: Subscriber<boolean>) => {
			subscriber.next(Boolean(this._getTokenCookie()));
			subscriber.complete();
		});
	}

	public login(login: string, password: string) {
		const sub = this._httpLogin(login, password).subscribe(async (resp: TLoginResponse) => {
			this._loginSuccess(resp.token);
			arrayUnsubscribe([sub]);
			await this._redirectToMain();
		}, (error: HttpErrorResponse) => {
			alert('Error: ' + error.error);
			this._loginFailed();
		});
	}

	public logout() {
		this.isLogin = false;
		this._deleteTokenCookie();
	}

	private _loginSuccess(token: string) {
		this._setTokenCookie(token);
		this.isLogin = true;
	}

	private _loginFailed() {
		this.isLogin = false;
		this.token = undefined;
	}

	private _setTokenCookie(token: string) {
		this._cookieService.set(USER_COOKIE_TOKEN, token);
	}

	private _getTokenCookie(): string {
		return this._cookieService.get(USER_COOKIE_TOKEN);
	}

	private _deleteTokenCookie() {
		this._cookieService.delete(USER_COOKIE_TOKEN);
	}

	private async _redirectToMain() {
		await this._router.navigateByUrl('/');
	}

	private _httpLogin(login: string, password: string): Observable<TLoginResponse> {
		return this._httpClient.post<TLoginResponse>(joinUrl([BASE_URL, '/auth/login']), {
			login,
			password
		});
	}
}
