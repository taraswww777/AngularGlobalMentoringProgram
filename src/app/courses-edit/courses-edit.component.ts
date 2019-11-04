import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'app-courses-edit',
	templateUrl: './courses-edit.component.html',
	styleUrls: [
		'./courses-edit.component.css',
	]
})
export class CoursesEditComponent implements OnInit {
	@Input() id: number;
	constructor() {
	}

	ngOnInit() {
	}

	onEdit() {
		console.log('this.onEdit.id', this.id);
	}
}
