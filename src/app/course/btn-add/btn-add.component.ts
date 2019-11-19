import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'course-btn-add',
	templateUrl: './btn-add.component.html',
	styleUrls: [
		'./btn-add.component.css',
	]
})
export class CourseAddComponent implements OnInit {
	constructor() {
	}

	ngOnInit() {
	}

	onAdd(){
		console.log('onAdd:');
	}
}
