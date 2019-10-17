import {Component, OnInit} from '@angular/core';
import {User} from 'src/models/user';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	user: User;

	constructor() {
		this.user = new User({
			Id: 1,
			FirstName: 'demo FirstName',
			LastName: 'demo LastName',
		})
	}

	ngOnInit() {
	}

}
