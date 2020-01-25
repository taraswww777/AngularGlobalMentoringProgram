import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CookieService } from 'ngx-cookie-service';
import { Observable, Subscriber } from 'rxjs';
import { BASE_URL } from '../consts';
import { TStoreCommonModule } from '../store';
import { setUserInfo } from '../store/reducers/user.reducer';
import { TFullUserInfo } from '../types';
import { arrayUnsubscribe } from '../utils/array';
import { joinUrl } from '../utils/string';
import _ from 'lodash';
import { RedirectService } from './redirect';


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
		private _httpClient: HttpClient,
		private _store: Store<TStoreCommonModule>,
		private _redirectService: RedirectService,
	) {
	}

	public isAuthenticated(): Observable<boolean> {
		return new Observable((subscriber: Subscriber<boolean>) => {
			subscriber.next(Boolean(this._getTokenCookie()));
			subscriber.complete();
		});
	}

	public login(login: string, password: string, callback?: () => Promise<void>) {
		const sub = this._httpLogin(login, password).subscribe(async (resp: TLoginResponse) => {
			this._loginSuccess(resp.token);
			if (callback) {
				await callback();
			}
			arrayUnsubscribe([sub]);
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

	private _httpLogin(login: string, password: string): Observable<TLoginResponse> {
		return this._httpClient.post<TLoginResponse>(joinUrl([BASE_URL, '/auth/login']), {
			login,
			password
		});
	}

	public getUserInfo(): Observable<TFullUserInfo> {
		return this._httpClient.post<TFullUserInfo>(joinUrl([BASE_URL, '/auth/userInfo']), {
			token: this._getTokenCookie()
		});
	}

	public loadUserInfo(): Observable<TFullUserInfo> {
		const obsUserInfo = this.getUserInfo();

		const sub = obsUserInfo.subscribe((userInfo: TFullUserInfo) => {
			// I think this some better between previous implementation, but to not good
			this._store.dispatch(setUserInfo({ payload: userInfo }));
			arrayUnsubscribe([sub]);
		});

		return obsUserInfo;
	}
}
