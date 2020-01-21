import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

	constructor(private _userService: UserService) {}

	intercept(
		req: HttpRequest<any>,
		next: HttpHandler
	): Observable<HttpEvent<any>> {

		// TODO: Описать обработку падения запроса
		const authReq = req.clone({
			headers: req.headers.set('token', this._userService.token)
		});

		return next.handle(authReq);
	}
}
