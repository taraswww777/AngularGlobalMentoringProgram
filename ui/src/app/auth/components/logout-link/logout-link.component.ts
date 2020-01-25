import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
	selector: 'app-logout-link',
	templateUrl: './logout-link.component.html',
	styleUrls: [
		'./logout-link.component.css',
	]
})
export class LogoutLinkComponent implements OnInit {
	@Input() public logout: () => void = _.noop;

	public onClickLogout() {
		this.logout();
	}

	ngOnInit() {
	}

}
