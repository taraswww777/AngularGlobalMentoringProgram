import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from '../services';


@Injectable({ providedIn: 'root' })
export class LoginGuard implements CanActivate {
	constructor(
		private _userService: UserService,
		private _router: Router) {
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
						this._redirectToHome();
						return false;
					} else {
						return true;
					}
				}

				if (!isAuth) {
					this._redirectToLogin();
				}
				return isAuth;
			}), catchError(this._catchError));
	}

	private _catchError = () => {
		this._redirectToLogin();
		return of(false);
	};

	private _redirectToHome = () => {
		this._router.navigate(['/']);
	};

	private _redirectToLogin = () => {
		this._router.navigate(['/login']);
	};

	private static _isLoginPage(next: ActivatedRouteSnapshot): boolean {
		return next.routeConfig.path === 'login';
	}
}
