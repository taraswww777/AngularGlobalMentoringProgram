import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";

@Component({
	selector: 'app-courses-item',
	templateUrl: './courses-item.component.html',
	styleUrls: [
		'./courses-item.component.scss',
	]
})
export class CoursesItemComponent implements OnInit {
	@Input()
	course: Course;

	constructor() {
	}

	ngOnInit() {
	}

	onClickToggleFavorite() {
		this.course.favorite = !this.course.favorite;
		// TODO: send request to server
	}
}
