import {Directive, ElementRef, Input, Renderer2} from "@angular/core";
import {TCourse} from "../../models/course";

@Directive({
	selector: '[freshCourseBind]'
})
export class FreshCourseDirective {
	@Input('freshCourseBind') public course: TCourse;

	private today: Date = new Date();

	constructor(
		private el: ElementRef,
		private renderer: Renderer2,
	) {
	}

	ngOnInit() {
		this.setStyle();
	}

	private setStyle() {
		const date = new Date(this.course.date);
		const daysLag = Math.ceil(Math.abs(this.today.getTime() - date.getTime()) / (1000 * 3600 * 24));
		const maxLag = 14;
		const isFeature = this.today <date;

		if (this.today >= date && daysLag <= maxLag) {
			this.renderer.setStyle(this.el.nativeElement, 'border-color', 'green');
		} else if (isFeature) {
			this.renderer.setStyle(this.el.nativeElement, 'border-color', 'blue');
		}
	}
}
