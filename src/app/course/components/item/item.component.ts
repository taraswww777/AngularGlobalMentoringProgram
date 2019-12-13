import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";
import _ from "lodash";

@Component({
	selector: 'courses-item',
	templateUrl: './item.component.html',
	styleUrls: [
		'./item.component.scss',
	]
})
export class CourseItemComponent implements OnInit {
	@Input() public course: Course;
	@Input() public refreshListCourses: () => void = _.noop;

	ngOnInit() {
	}

	onClickToggleFavorite() {
		this.course.favorite = !this.course.favorite;
		// TODO: send request to server
	}

	afterDelete() {
		this.refreshListCourses();
	};
}
