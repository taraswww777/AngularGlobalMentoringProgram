import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-login-link',
	templateUrl: './login-link.component.html',
	styleUrls: [
		'./login-link.component.css',
	]
})
export class LoginLinkComponent implements OnInit {

	public onClickLogin() {
		// todo: redirect to login page
		console.log('onClickLogin:');
	}

	ngOnInit() {
	}

}
