import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import _ from 'lodash';
import { Observable } from 'rxjs';
import { UserService } from '../common/services';
import { TStoreCommonModule } from '../common/store';
import { TStoreUserInfo } from '../common/store/reducers/user.reducer';
import { getUserInfo } from '../common/store/selectors';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [
		'./header.component.css',
	]
})
export class HeaderComponent implements OnInit {
	@Input() public title: string;
	@Input() public logout: () => void = _.noop;

	public isAuthenticated: Observable<boolean>;
	public userInfo$: Observable<TStoreUserInfo>;

	constructor(
		private _userService: UserService,
		private _store: Store<TStoreCommonModule>,
	) {
		this.isAuthenticated = this._userService.isAuthenticated();
	}

	ngOnInit() {
		this.userInfo$ = this._store.pipe(select(getUserInfo));

		this.userInfo$.subscribe(() => {
			this.isAuthenticated = this._userService.isAuthenticated();
		});
	}
}
