import {Component, Input, OnInit} from '@angular/core';
import _ from 'lodash';

@Component({
	selector: 'app-rating',
	templateUrl: './rating.component.html',
	styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit {

	@Input() public rating: number;
	@Input() public maxRating: number = 5;
	@Input() public isShowNumber: boolean = true;

	public stars: boolean[] = [];
	public avgRate: number = 0;

	ngOnInit() {
		this.stars = [];
		this.avgRate = _.floor(this.rating);

		for (let i = 0; i < this.maxRating; i++) {
			this.stars.push(i < this.avgRate);
		}
	}
}
