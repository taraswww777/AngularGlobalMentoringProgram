import { Component, OnInit, Input } from '@angular/core';
import { TFullUserInfo } from '../../types';

@Component({
	selector: 'app-short-user-info',
	templateUrl: './short-user-info.component.html',
	styleUrls: ['./short-user-info.component.scss']
})
export class ShortUserInfoComponent implements OnInit {
	@Input() public userInfo: TFullUserInfo;

	constructor() {
	}

	ngOnInit() {
	}

}
