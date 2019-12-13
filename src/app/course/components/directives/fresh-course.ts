import {Directive, ElementRef, Input, Renderer2} from "@angular/core";
import {Course} from "../../models/course";

@Directive({
	selector: '[freshCourseBind]'
})
export class FreshCourseDirective {
	@Input('freshCourseBind') public course: Course;

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
		const daysLag = Math.ceil(Math.abs(this.today.getTime() - this.course.creationDate.getTime()) / (1000 * 3600 * 24));
		const maxLag = 14;
		const isFeature = this.today < this.course.creationDate;

		if (this.today >= this.course.creationDate && daysLag <= maxLag) {
			this.renderer.setStyle(this.el.nativeElement, 'border-color', 'green');
		} else if (isFeature) {
			this.renderer.setStyle(this.el.nativeElement, 'border-color', 'blue');
		}
	}
}
