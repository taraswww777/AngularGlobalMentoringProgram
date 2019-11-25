import {Component, OnInit} from '@angular/core';

@Component({
	selector: 'course-btn-add',
	templateUrl: './btn-add.component.html',
	styleUrls: [
		'./btn-add.component.css',
	]
})
export class CourseAddComponent implements OnInit {
	public isShowEditor: boolean = false;

	ngOnInit() {
	}

	onAdd() {
		this._showEditor();
	}

	private _showEditor() {
		this.isShowEditor = true;
	}
}
