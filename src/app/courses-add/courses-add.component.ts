import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-courses-add',
	templateUrl: './courses-add.component.html',
	styleUrls: [
		'./courses-add.component.css',
		'../../../node_modules/font-awesome5/css/fontawesome-all.min.css',
		'../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
	]
})
export class CoursesAddComponent implements OnInit {
	@Input() id: number;

	constructor() {
	}

	ngOnInit() {
	}

}
