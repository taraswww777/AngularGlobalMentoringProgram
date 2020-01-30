import { Component, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Component({
	selector: 'app-errors-input',
	templateUrl: './errors-input.component.html',
	styleUrls: ['./errors-input.component.scss']
})
export class ErrorsInputComponent {

	@Input() public errors: ValidationErrors | null;
	@Input() public fieldName: string = '';

	constructor() {
	}

}
