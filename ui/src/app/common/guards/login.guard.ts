import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from '../services';
import { RedirectService } from '../services/redirect';


@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
	constructor(
		private _userService: UserService,
		private _redirectService: RedirectService,
		private _router: Router,
	) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

		const isLoginPage: boolean = LoginGuard._isLoginPage(next);

		return this._userService.isAuthenticated()
			.pipe(map((isAuth: boolean) => {

				if (isLoginPage) {
					if (isAuth) {
						this._redirectService.toMain();
						return false;
					} else {
						return true;
					}
				}

				if (!isAuth) {
					this._redirectService.toLogin();
				}
				return isAuth;
			}), catchError(this._catchError));
	}

	private _catchError = () => {
		this._redirectService.toLogin();
		return of(false);
	};

	private static _isLoginPage(next: ActivatedRouteSnapshot): boolean {
		return next.routeConfig.path === 'login';
	}
}
