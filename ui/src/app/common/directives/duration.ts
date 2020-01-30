import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import _ from 'lodash';
import { Observable } from 'rxjs';


function format(duration: number): string {
	const secondsInHour = 60 * 60;
	const secondsInMinutes = 60;
	let text: string = '';
	const hours = _.toInteger(duration / secondsInHour);
	duration -= hours * secondsInHour;
	const minutes = _.toInteger(duration / secondsInMinutes);
	const seconds = duration - minutes * secondsInMinutes;

	const hasHours = hours > 0;
	const hasMinutes = minutes > 0;
	const hasSeconds = seconds > 0;

	text += hasHours ? `${hours}h : ` : '';
	text += hasMinutes ? `${minutes}min : ` : '';

	if (hasHours || hasMinutes) {
		text += hasSeconds ? `${seconds}s` : '';
	} else {
		text += `0s`;
	}
	return _.trim(_.trim(text), ':');
}

@Directive({
	selector: '[duration]',
})
export class DurationDirective {
	@Input() public duration: number;

	private _value: string;

	constructor(private el: ElementRef) {
	}

	ngOnInit() {
		this._value = _.toString(this.duration);
		this.calc();
	}

	private calc() {
		this.el.nativeElement.textContent = format(this.duration);
	}
}


@Directive({
	selector: '[durationObservable]',
})
export class DurationObservable {
	@Input() public durationObservable: Observable<number>;

	private _value: string;

	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
	) {
	}

	ngOnInit() {
		this._value = _.toString(this.durationObservable);
		this.durationObservable.subscribe((duration: number) => {
			this.el.nativeElement.textContent = format(duration);
		});
	}
}
