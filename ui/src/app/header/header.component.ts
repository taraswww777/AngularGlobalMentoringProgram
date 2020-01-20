import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Observable } from 'rxjs';
import { UserService } from '../common/services/user.service';

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

	constructor(
		private _userService: UserService,
	) {
		this.isAuthenticated = this._userService.isAuthenticated();
	}

	ngOnInit() {
	}
}
