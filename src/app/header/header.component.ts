import {Component, Input, OnInit} from '@angular/core';
import {User} from 'src/models/user';
import * as _ from "lodash";

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [
		'./header.component.css',
	]
})
export class HeaderComponent implements OnInit {
	@Input() public title: string;
	@Input() public setAuthStatus: (boolean) => void = _.noop;
	@Input() public isAuth: boolean = false;
	public user: User;

	constructor() {
		this.user = new User({
			id: 1,
			firstName: 'demo FirstName',
			lastName: 'demo LastName',
		})
	}

	ngOnInit() {
	}

}
