import {ICourse} from "../interfaces/course";

export type CourseProps = {
	id: number;
	title: string;
	creationDate: string;
	duration: number;
	rating: number;
	favorite: boolean;
	description: string;
};

export class Course implements ICourse {
	creationDate: Date;
	description: string = '';
	duration: number = 30;
	id: number = 0;
	title: string = '';
	rating: number = 0;
	favorite: boolean = false;

	constructor(props: CourseProps) {
		this.id = props.id;
		this.title = props.title;
		this.creationDate = new Date(props.creationDate);
		this.duration = props.duration;
		this.description = props.description;
		this.rating = props.rating;
		this.favorite = props.favorite;
	}
}
