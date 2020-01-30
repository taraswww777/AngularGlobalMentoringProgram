import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-input-duration',
	templateUrl: './input-duration.component.html',
	styleUrls: ['./input-duration.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => InputDurationComponent),
		multi: true,
	}],
})
export class InputDurationComponent implements ControlValueAccessor {

	@Input() public formControl: FormControl = new FormControl();
	@Input() public fieldName: string = 'duration';

	@Input() public id: string = '';
	@Input() public name: string = '';
	@Input() public placeholder: string = '';

	public value: number = 0;
	public disabled: boolean = false;

	private _onChange = (value: any) => {
	};

	public onTouched = () => {
	};

	constructor() {
	}

	registerOnChange(fn: (value: any) => void): void {
		this._onChange = fn;
	}

	registerOnTouched(fn: () => void): void {
		this.onTouched = fn;
	}

	setDisabledState(isDisabled: boolean): void {
		this.disabled = isDisabled;
	}

	writeValue(obj: any): void {
		this.value = obj;
	}
}
