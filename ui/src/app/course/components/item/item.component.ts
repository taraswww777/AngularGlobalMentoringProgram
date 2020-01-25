import { Component, Input, OnInit } from '@angular/core';
import { TCourse } from '../../types';

@Component({
	selector: 'courses-item',
	templateUrl: './item.component.html',
	styleUrls: [
		'./item.component.scss',
	]
})
export class CourseItemComponent implements OnInit {
	@Input() public course: TCourse;
	@Input() public refreshListCourses: () => Promise<void> = Promise.resolve;

	ngOnInit() {
	}

	public async onClickToggleFavorite() {
		this.course.isTopRated = !this.course.isTopRated;
	}

	public async afterDelete() {
		await this.refreshListCourses();
	};
}
