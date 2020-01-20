import {Component, Input, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import _ from 'lodash';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: [
		'./search-input.component.css',
	]
})
export class SearchInputComponent implements OnInit {
	public inputValue: FormControl = new FormControl('');
	@Input() public searchString: string = '';
	@Input() public onChangeSearch: (string) => void = _.noop;
	@Input() public onSubmitSearch: (string) => void = _.noop;

	public onSubmit() {
		this.searchString = this.inputValue.value;
		this.onSubmitSearch(this.inputValue.value);
	}

	public onInputChange() {
		this.searchString = this.inputValue.value;
		this.onChangeSearch(this.inputValue.value);
	}

	ngOnInit() {
	}

}
