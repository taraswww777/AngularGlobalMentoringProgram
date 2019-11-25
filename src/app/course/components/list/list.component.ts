import {Component, OnInit, Input} from '@angular/core';
import {Course} from "../../models/course";

@Component({
	selector: 'courses-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.css']
})
export class CourseListComponent implements OnInit {

	@Input()
	public listCourses: Course[] = [];

	ngOnInit() {
	}

}
