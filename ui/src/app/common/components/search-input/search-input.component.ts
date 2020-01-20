import { fromEvent } from 'rxjs';
import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';

@Component({
	selector: 'app-search-input',
	templateUrl: './search-input.component.html',
	styleUrls: [
		'./search-input.component.css',
	]
})
export class SearchInputComponent {
	public inputValue: FormControl = new FormControl('');
	private nativeInput: ElementRef['nativeElement'];
	@Output() private startSearch: EventEmitter<string> = new EventEmitter();

	constructor(ref: ElementRef) {
		this.nativeInput = ref.nativeElement;
	}

	public onInputChange(value: string) {
		fromEvent(this.nativeInput.querySelector('input'), 'keyup')
			.pipe(filter(({target: {value}}) => value.length >= 3), debounceTime(1000))
			.subscribe(() => this._onSearch(value));
	}

	private _onSearch(value: string) {
		this.startSearch.emit(value);
	}
}
