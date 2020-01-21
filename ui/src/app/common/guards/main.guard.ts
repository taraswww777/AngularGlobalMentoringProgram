import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { UserService } from '../services';


@Injectable({ providedIn: 'root' })
export class MainGuard implements CanActivate {
	constructor(
		private _userService: UserService,
		private _router: Router) {
	}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this._userService.isAuthenticated()
			.pipe(map((isAuth: boolean) => {
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

	private _redirectToLogin = () => {
		this._router.navigate(['/login']);
	};
}
