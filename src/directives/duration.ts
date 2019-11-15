import {Directive, ElementRef, Input, Renderer2} from "@angular/core";
import * as _ from 'lodash';

@Directive({
	selector: '[duration]',
})
export class DurationDirective {
	@Input('duration') public duration: number;
	// @Input() public format: string;

	private _value: string;

	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
	) {
	}

	ngOnInit() {
		this._value = _.toString(this.duration);
		this.calc();
	}

	private calc() {
		this.el.nativeElement.textContent = this._format();
	}

	private _format(): string {
		const secondsInHour = 60 * 60;
		const secondsInMinutes = 60;
		let text: string = '';
		let duration = this.duration;
		const hours = _.toInteger(this.duration / secondsInHour);
		duration -= hours * secondsInHour;
		const minutes = _.toInteger(duration / secondsInMinutes);
		const seconds = duration - minutes * secondsInMinutes;

		text += hours > 0 ? `${hours}h:` : '';
		text += minutes > 0 ? `${minutes}min:` : '';
		text += seconds > 0 ? `${seconds}s` : '';
		return _.trim(text, ':');
	}
}
