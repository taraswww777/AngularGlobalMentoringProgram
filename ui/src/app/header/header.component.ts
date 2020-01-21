import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import _ from 'lodash';
import { Observable } from 'rxjs';
import { UserService } from '../common/services';
import { TStore } from '../common/store';
import { TStoreUserInfo } from '../common/store/reducers/user.reducer';

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
		private _store: Store<TStore>,
	) {
		this.isAuthenticated = this._userService.isAuthenticated();
	}

	ngOnInit() {
		this.userInfo$ = this._store.pipe(select('userInfo'));

		this.userInfo$.subscribe(() => {
			this.isAuthenticated = this._userService.isAuthenticated();
		});
	}
}
