import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";

@Component({
	selector: 'courses-item',
	templateUrl: './item.component.html',
	styleUrls: [
		'./item.component.scss',
	]
})
export class CourseItemComponent implements OnInit {
	@Input()
	course: Course;

	ngOnInit() {
	}

	onClickToggleFavorite() {
		this.course.favorite = !this.course.favorite;
		// TODO: send request to server
	}
}
