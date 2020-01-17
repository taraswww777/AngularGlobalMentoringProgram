import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { User } from 'src/models/user';
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
	public user: User;

	constructor(
		private userService: UserService,
	) {
		this.user = new User({
			id: 1,
			firstName: 'demo FirstName',
			lastName: 'demo LastName',
		});
	}

	ngOnInit() {
	}

}
