import { FormControl } from '@angular/forms';

export type TCourse = {
	id: number;
	title: string;
	creationDate: string;
	duration: number;
	rating: number;
	favorite: boolean;
	description: string;
};

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

	constructor(props: Partial<TCourse> = {}) {
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
	public title: FormControl;
	public creationDate: FormControl;
	public duration: FormControl;
	public rating: FormControl;
	public favorite: FormControl;
	public description: FormControl;

	constructor(props: Partial<TCourse> = {}) {
		this.id = new FormControl(props.id || 0);
		this.title = new FormControl(props.title || '');
		this.creationDate = new FormControl(new Date(props.creationDate || '2019-01-01T00:00:00'));
		this.duration = new FormControl(props.duration || 0);
		this.rating = new FormControl(props.rating || 0);
		this.favorite = new FormControl(props.favorite || false);
		this.description = new FormControl(props.description || '');
	}

	public toJsonObject(): TCourse {
		return {
			id: this.id.value,
			title: this.title.value,
			creationDate: this.creationDate.valid ? this.creationDate.value : '2019-01-01T00:00:00',
			duration: this.duration.value,
			rating: this.rating.value,
			favorite: this.favorite.value,
			description: this.description.value,
		};
	}
}
