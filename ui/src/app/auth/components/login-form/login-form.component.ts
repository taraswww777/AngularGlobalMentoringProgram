import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'login-form',
	templateUrl: './login-form.component.html',
	styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
	@Input() public tryLogin: (login: string, password: string) => Promise<void> = Promise.resolve;
	// TODO: delete demo login/password
	public login: FormControl = new FormControl('Morales');
	public password: FormControl = new FormControl('id');

	ngOnInit() {
	}

	public async onSubmitLogin(): Promise<void> {

		const login = this.login.value;
		const password = this.password.value;

		if (!login || !password) {
			console.error('onSubmitLogin:error:no data');
			return;
		}

		await this.tryLogin(login, password);
	}
}
