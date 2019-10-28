import {Component, Input, OnInit} from '@angular/core';
import {User} from 'src/models/user';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [
		'./header.component.css',
		'../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
	]
})
export class HeaderComponent implements OnInit {
	@Input()
	public title: string;

	public user: User;

	constructor() {
		this.user = new User({
			id: 1,
			firstName: 'demo FirstName',
			lastName: 'demo LastName',
		})
	}

	ngOnInit(...title: any) {
		console.log('arguments:', arguments);
		console.log('title:', title);
	}

}
