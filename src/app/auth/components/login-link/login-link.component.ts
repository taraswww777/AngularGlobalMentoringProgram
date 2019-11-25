import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-login-link',
	templateUrl: './login-link.component.html',
	styleUrls: [
		'./login-link.component.css',
	]
})
export class LoginLinkComponent implements OnInit {

	constructor() {
	}

	public onClickLogin() {
		// todo:
		console.log('onClickLogin:');
	}

	ngOnInit() {
	}

}
