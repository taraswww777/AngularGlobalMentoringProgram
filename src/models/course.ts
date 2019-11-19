import {ICourse} from "../interfaces/course";
import {FormControl} from "@angular/forms";

export type CourseProps = {} & {
	id?: number;
	title?: string;
	creationDate?: string;
	duration?: number;
	rating?: number;
	favorite?: boolean;
	description?: string;
};

export class Course implements ICourse {
	creationDate: Date;
	description: string = '';
	duration: number = 30;
	id: number = 0;
	title: string = '';
	rating: number = 0;
	favorite: boolean = false;

	constructor(props: CourseProps = {}) {
		this.id = props.id || 0;
		this.title = props.title || '';
		this.creationDate = new Date(props.creationDate || '');
		this.duration = props.duration || 0;
		this.description = props.description || '';
		this.rating = props.rating || 0;
		this.favorite = props.favorite || false;
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

	constructor(props: CourseProps = {}) {
		this.id = new FormControl(props.id || 0);
		this.title = new FormControl(props.title || '');
		this.creationDate = new FormControl(new Date(props.creationDate || ''));
		this.duration = new FormControl(props.duration || 0);
		this.rating = new FormControl(props.description || '');
		this.favorite = new FormControl(props.rating || 0);
		this.description = new FormControl(props.favorite || false);
	}
}
