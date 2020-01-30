import { Component, Input, OnInit } from '@angular/core';
import _ from 'lodash';

@Component({
	selector: 'courses-load-more',
	templateUrl: './btn-load-more.component.html',
	styleUrls: ['./btn-load-more.component.css']
})
export class CourseLoadMoreComponent implements OnInit {
	public showLoader: boolean = false;
	@Input() public loadMore: () => void = _.noop;

	ngOnInit() {
	}

	onLoadMore() {
		this.showLoader = true;
		//TODO: need support pagination in BE
		this.loadMore();
		this.showLoader = false;
	}
}
