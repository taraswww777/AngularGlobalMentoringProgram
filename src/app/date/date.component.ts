import {Component, Input, OnInit} from '@angular/core';

type Month = {
	number: number,
	title: string
}

@Component({
	selector: 'app-date',
	templateUrl: './date.component.html',
	styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
	@Input() public date: Date;
	private months: Month[] = [
		{number: 0, title: 'Jan'},
		{number: 1, title: 'Feb'},
		{number: 2, title: 'Mar'},
		{number: 3, title: 'Apr'},
		{number: 4, title: 'May'},
		{number: 5, title: 'Jun'},
		{number: 6, title: 'Jul'},
		{number: 7, title: 'Aug'},
		{number: 8, title: 'Sep'},
		{number: 9, title: 'Oct'},
		{number: 10, title: 'Nov'},
		{number: 11, title: 'Dec'},
	];

	protected getMonth(monthNumber: number) {
		return this.months.find(month => month.number === monthNumber);
	}

	constructor() {
	}

	ngOnInit() {
	}

}
