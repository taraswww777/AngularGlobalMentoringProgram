import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'app-logout-link',
	templateUrl: './logout-link.component.html',
	styleUrls: [
		'./logout-link.component.css',
	]
})
export class LogoutLinkComponent implements OnInit {

	constructor() {
	}

	public onClickLogout() {
		console.log('onClickLogout:');
	}

	ngOnInit() {
	}

}
