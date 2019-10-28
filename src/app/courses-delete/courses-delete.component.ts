import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-courses-delete',
	templateUrl: './courses-delete.component.html',
	styleUrls: [
		'./courses-delete.component.css',
	]
})
export class CoursesDeleteComponent implements OnInit {
	@Input() id: number;

	constructor() {
	}

	ngOnInit() {
	}

}
