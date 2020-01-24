import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RedirectService {
	constructor(
		private _router: Router,
	) {
	}

	public toMain() {
		return this._router.navigateByUrl('/');
	}


	public toLogin() {
		return this._router.navigateByUrl('/login');
	}
}
