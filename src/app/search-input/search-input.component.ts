import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: [
		'./search-input.component.css',
	]
})
export class SearchInputComponent implements OnInit {
	public inputValue: FormControl = new FormControl('');

	constructor() {
	}

	public onSubmit() {
		console.log('SearchInputComponent.onSubmit.input:', this.inputValue.value);
	}

	public onInputChange() {
		console.log('SearchInputComponent.onChange.input:', this.inputValue.value);
	}

	ngOnInit() {
	}

}
