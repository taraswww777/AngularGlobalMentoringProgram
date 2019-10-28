import {Component, OnInit, Input} from '@angular/core';

@Component({
	selector: 'app-courses-delete',
	templateUrl: './courses-delete.component.html',
	styleUrls: [
		'./courses-delete.component.css',
		'../../../node_modules/font-awesome5/css/fontawesome-all.min.css',
		'../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
	]
})
export class CoursesDeleteComponent implements OnInit {
	@Input() id: number;

	constructor() {
	}

	ngOnInit() {
	}

}
