import * as _ from 'lodash';
import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
	@Input() public setAuthStatus: (boolean) => void = _.noop;
	public login: FormControl = new FormControl('admin');
	public password: FormControl = new FormControl('admin');

	ngOnInit() {
	}

	public async onSubmitLogin() {

		const login = this.login.value;
		const password = this.password.value;

		if (!login || !password) {
			console.error('onSubmitLogin:error:no data');
			return;
		}
		if (login === 'admin' && password === 'admin') {
			this.setAuthStatus(true);
		}
	}
}
