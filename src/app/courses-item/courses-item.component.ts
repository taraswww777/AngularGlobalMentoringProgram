import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";

@Component({
	selector: 'app-courses-item',
	templateUrl: './courses-item.component.html',
	styleUrls: [
		'./courses-item.component.css',
		'../../../node_modules/font-awesome5/css/fontawesome-all.min.css',
		'../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
	]
})
export class CoursesItemComponent implements OnInit {
	@Input()
	course: Course;

	constructor() {
	}

	ngOnInit() {
	}

}
