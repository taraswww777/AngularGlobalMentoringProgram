import {Component, Input, OnInit} from '@angular/core';
import * as _ from "lodash";

@Component({
	selector: 'app-logout-link',
	templateUrl: './logout-link.component.html',
	styleUrls: [
		'./logout-link.component.css',
	]
})
export class LogoutLinkComponent implements OnInit {
	@Input() public setAuthStatus: (boolean) => void = _.noop;

	constructor() {
	}

	public onClickLogout() {
		console.log('onClickLogout:');
		this.setAuthStatus(false);
	}

	ngOnInit() {
	}

}
