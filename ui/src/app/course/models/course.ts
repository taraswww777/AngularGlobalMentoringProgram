import { FormControl } from '@angular/forms';
import { TCourse, TAuthors } from '../types';

export interface ICourse {
	id: number;
	title: string;
	creationDate: Date;
	duration: number;
	description: string;
	rating: number;
	favorite: boolean;

	toString(): string
}


export class Course implements ICourse {
	creationDate: Date;
	description: string = '';
	duration: number = 30;
	id: number = 0;
	title: string = '';
	rating: number = 0;
	favorite: boolean = false;

	constructor(props: Partial<any> = {}) {
		this.id = props.id || 0;
		this.title = props.title || '';
		this.creationDate = new Date(props.creationDate || '');
		this.duration = props.duration || 0;
		this.description = props.description || '';
		this.rating = props.rating || 0;
		this.favorite = props.favorite || false;
	}

	toString(): string {
		return JSON.stringify({
			id: this.id,
			title: this.title,
			creationDate: this.creationDate,
			duration: this.duration,
			description: this.description,
			rating: this.rating,
			favorite: this.favorite,
		});
	}
}

export class CourseFormControl {
	public id: FormControl;
	public name: FormControl;
	public date: FormControl;
	public length: FormControl;
	public isTopRated: FormControl;
	public description: FormControl;
	public authors: TAuthors[];

	constructor(course: Partial<TCourse> = {}) {
		this.id = new FormControl(course.id || 0);
		this.name = new FormControl(course.name || '');
		this.date = new FormControl(new Date(course.date || '2019-01-01T00:00:00'));
		this.length = new FormControl(course.length || 0);
		this.isTopRated = new FormControl(course.isTopRated || false);
		this.description = new FormControl(course.description || '');
		this.authors = course.authors || [];
	}

	public toJsonObject(): TCourse {
		return {
			id: this.id.value,
			name: this.name.value,
			date: this.date.valid ? this.date.value : '2019-01-01T00:00:00',
			length: this.length.value,
			isTopRated: this.isTopRated.value,
			description: this.description.value,
			authors: this.authors || []
		};
	}
}
