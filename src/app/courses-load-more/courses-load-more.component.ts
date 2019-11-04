import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";

@Component({
	selector: 'app-courses-load-more',
	templateUrl: './courses-load-more.component.html',
	styleUrls: ['./courses-load-more.component.css']
})
export class CoursesLoadMoreComponent implements OnInit {
	public showLoader: boolean = false;
	@Input()
	public listCourses: Course[] = [];

	constructor() {
	}

	ngOnInit() {
	}

	onLoadMore() {
		console.log('onLoadMore:');
		this.showLoader = true;
		setTimeout(() => {
			const id: number = this.listCourses.length + 1;
			this.listCourses.push(new Course({
				id: id,
				title: 'demo Title ' + id,
				creationDate: '10-10-2019',
				duration: 15,
				description: 'demo Description ' + id,
			}));
			this.showLoader = false
		}, 1000);
	}
}
