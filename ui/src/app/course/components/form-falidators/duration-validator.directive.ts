import _ from 'lodash';
import { Directive, forwardRef } from '@angular/core';
import {
	Validator,
	AbstractControl,
	ValidationErrors,
	NG_VALIDATORS,
	ValidatorFn,
	Validators
} from '@angular/forms';

export const onlyNumbers: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
	let valueNumber = _.toNumber(control.value);
	let isValid = valueNumber == control.value;
	return !isValid ? { onlyNumbers: true } : null;
};

export const DurationValidators: ValidatorFn[] = [
	Validators.min(1),
	Validators.max(999999),
	Validators.pattern(/^-?\d+$/),
	onlyNumbers,
];


@Directive({
	selector: '[appDurationValidator]',
	providers: [
		{
			provide: NG_VALIDATORS,
			useExisting: forwardRef(() => DurationValidatorDirective),
			multi: true
		}
	]
})
export class DurationValidatorDirective implements Validator {

	constructor() {
	}

	validate(control: AbstractControl): ValidationErrors | null {
		return this._validateDuration(control);
	}

	private _validateDuration(control: AbstractControl): ValidationErrors | null {
		const resArr = _.compact(DurationValidators.map((validator: ValidatorFn) => validator(control)));
		const res = {};
		let key = '';
		if (resArr.length) {
			resArr.forEach(((value: {}) => {
				key = _.keys(value)[0];
				res[key] = value[key];
			}));
		}

		return resArr.length ? res : undefined;

	}

}
