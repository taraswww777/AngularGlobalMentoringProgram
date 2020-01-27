import { Component } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { forwardRef } from '@angular/core';

@Component({
	selector: 'app-input-duration',
	templateUrl: './input-duration.component.html',
	styleUrls: ['./input-duration.component.scss'],
	providers: [{
		provide: NG_VALUE_ACCESSOR,
		useExisting: forwardRef(() => InputDurationComponent),
		multi: true
	}]
})
export class InputDurationComponent implements ControlValueAccessor {
	public value = 0;
	// public formControlValue = new FormControl(60, [
	// 	Validators.min(0),
	// 	Validators.max(999999),
	// 	Validators.pattern(/^\d+$/),
	// 	Validators.required
	// ]);

	public hasErrors() {

	}

	public disabled = false;
	private onChange = (value: any) => {
	};
	private onTouched = () => {
	};

	/**
	 * Записать значение в компонент (из ts в html), основная функция
	 * @param obj
	 */
	writeValue(duration: any): void {
		this.value = duration;
		// this.formControlValue.setValue(duration);
		console.log('writeValue:', duration);
		// throw new Error('Method not implemented. writeValue');
	}

	/**
	 * Обработать значение из компонента (из html в ts), основная функция fn
	 * @param fn
	 */
	registerOnChange(fn: any): void {
		// throw new Error('Method not implemented registerOnChange.');
		console.log('registerOnChange:', fn);
		this.onTouched = fn;
	}

	/**
	 * Обработать, когда потрогали поле (потеря фокуса)
	 * @param fn
	 */
	registerOnTouched(fn: any): void {
		this.onTouched = fn;
		console.log('registerOnTouched:', fn);
		// throw new Error('Method not implemented registerOnTouched.');
	}

	/**
	 * Обработка недоступности
	 * @param isDisabled
	 */
	setDisabledState?(isDisabled: boolean): void {
		this.disabled = isDisabled;
		console.log('setDisabledState:', isDisabled);
		// throw new Error('Method not implemented setDisabledState.');
	}

	updateValue(insideValue: number) {
		console.log('updateValue:', insideValue);
		this.value = insideValue; // html
		this.onChange(insideValue); // уведомить Forms API
		this.onTouched();
	}
}
