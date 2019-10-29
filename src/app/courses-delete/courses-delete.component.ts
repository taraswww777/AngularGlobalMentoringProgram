import {Component, Input, OnInit} from '@angular/core';

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

	onDelete() {
		console.log('this.onDelete.id', this.id);
	}
}
