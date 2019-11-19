import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'course-btn-edit',
	templateUrl: './btn-edit.component.html',
	styleUrls: [
		'./btn-edit.component.css',
	]
})
export class CourseBtnEditComponent implements OnInit {
	@Input() id: number;
	constructor() {
	}

	ngOnInit() {
	}

	onEdit() {
		console.log('this.onEdit.id', this.id);
	}
}
