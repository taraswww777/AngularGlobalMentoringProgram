import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'course-btn-edit',
	templateUrl: './btn-edit.component.html',
	styleUrls: [
		'./btn-edit.component.css',
	]
})
export class CourseBtnEditComponent implements OnInit {
	@Input() id: number;
	public isShowEditor: boolean = false;

	constructor() {
	}

	ngOnInit() {
	}

	onEdit() {
		this._showEditor();
	}

	private _showEditor() {
		this.isShowEditor = true;
	}
}
