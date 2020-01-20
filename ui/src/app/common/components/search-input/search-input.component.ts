import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import _ from 'lodash';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: [
		'./search-input.component.css',
	]
})
export class SearchInputComponent implements OnInit {
	public inputValue: FormControl = new FormControl('');
	@Output() public search: any = '';
	@Input() public searchString: string = '';
	@Input() public onChangeSearch: (string) => void = _.noop;
	@Input() public onSubmitSearch: (string) => void = _.noop;


	ngOnInit() {

	}

	public onSubmit() {
		this.searchString = this.inputValue.value;
		this.onSubmitSearch(this.inputValue.value);
	}

	public onInputChange() {
		const value: string = _.toString(this.inputValue.value);

		// if (value.length < 3) {
		// 	return;
		// }

		console.log('--- SearchInputComponent.onInputChange ---');
		console.log('this.search:', this.search);
		// this.search.subscribe((value) => {
		// 	console.log('value1:', value);
		// 	console.log('1this.inputValue.value:', this.inputValue.value);
		// 	return this.inputValue.value;
		// });
		console.log('value:', value);
		this.searchString = this.inputValue.value;
		this.onChangeSearch(this.inputValue.value);
	}


}
