import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-courses-add',
	templateUrl: './courses-add.component.html',
	styleUrls: [
		'./courses-add.component.css',
	]
})
export class CoursesAddComponent implements OnInit {
	@Input() id: number;

	constructor() {
	}

	ngOnInit() {
	}

}
