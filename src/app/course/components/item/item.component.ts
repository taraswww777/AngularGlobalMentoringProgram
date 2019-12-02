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
	@Input() public course: Course;
	@Input() public refreshListCourses: () => Promise<void> = Promise.resolve;
	@Input() public updateCourse: (Course) => Promise<void> = Promise.resolve;

	ngOnInit() {
	}

	public async onClickToggleFavorite() {
		this.course.favorite = !this.course.favorite;
		await this.updateCourse(this.course);
	}

	public async afterDelete() {
		await this.refreshListCourses();
	};
}
