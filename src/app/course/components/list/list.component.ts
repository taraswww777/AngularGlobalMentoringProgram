import {Component, Input, OnInit} from '@angular/core';
import {Course} from "../../models/course";
import _ from 'lodash';

@Component({
	selector: 'courses-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class CourseListComponent implements OnInit {

	@Input() public listCourses: Course[] = [];
	@Input() public refreshListCourses: () => void = _.noop;

	ngOnInit() {
	}

}
