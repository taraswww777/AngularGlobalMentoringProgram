import { Component, Input, OnInit } from '@angular/core';
import { TCourse } from '../../types';

@Component({
	selector: 'courses-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class CourseListComponent implements OnInit {

	@Input() public listCourses: TCourse[] = [];
	@Input() public refreshListCourses: () => Promise<void> = Promise.resolve;

	ngOnInit() {
	}

}
