import { Component, Input, OnInit } from '@angular/core';
import { TCourse } from '../../models/course';

@Component({
	selector: 'app-course-detail',
	templateUrl: './course-detail.component.html',
	styleUrls: ['./course-detail.component.scss']
})
export class CourseDetailComponent implements OnInit {
	@Input() public course: TCourse;

	constructor() {
	}

	ngOnInit() {
	}
}
