import { Injectable } from '@angular/core';
import { UserService } from '../services';
import { RedirectService } from '../services/redirect';
import { Effect, Actions } from '@ngrx/effects';
// import { Observable } from 'rxjs';
// import { Action } from '@ngrx/store';

/*
 reed https://github.com/ngrx/example-app/blob/master/src/app/effects/collection.ts
*/

export const USER_ACTIONS = {
	LOAD_CURRENT_USER_INFO: 'LOAD_CURRENT_USER_INFO'
};

@Injectable({ providedIn: 'root' })
export class UsersEffects {

	constructor(
		private _actions$: Actions,
		private _userService: UserService,
		private _redirectService: RedirectService,
	) {

	}

	@Effect()
	public loadCurrentUserInfo$(): Actions {
		return this._actions$
			.ofType(USER_ACTIONS.LOAD_CURRENT_USER_INFO);
		// this._userService.loadUserInfo().subscribe(() => {
		// 	this._redirectService.toMain();
		// });
	}


}
