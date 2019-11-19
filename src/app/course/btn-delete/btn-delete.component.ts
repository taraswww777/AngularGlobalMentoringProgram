import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'course-btn-delete',
	templateUrl: './btn-delete.component.html',
	styleUrls: [
		'./btn-delete.component.css',
	]
})
export class CourseDeleteComponent implements OnInit {
	@Input() id: number;

	constructor() {
	}

	ngOnInit() {
	}

	onDelete() {
		console.log('this.onDelete.id', this.id);
	}
}
