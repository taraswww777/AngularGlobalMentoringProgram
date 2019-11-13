import {ICourse} from "../interfaces/course";

export type CourseProps = {
	id: number;
	title: string;
	creationDate: string;
	duration: number;
	description: string;
};

export class Course implements ICourse {
	creationDate: Date;
	description: string = '';
	duration: number = 30;
	id: number = 0;
	title: string = '';

	constructor(props: CourseProps) {
		this.id = props.id;
		this.title = props.title;
		this.creationDate = new Date(props.creationDate);
		this.duration = props.duration;
		this.description = props.description;
	}
}
