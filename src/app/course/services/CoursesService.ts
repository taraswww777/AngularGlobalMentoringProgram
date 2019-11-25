import {TCourse} from "../models/course";
import CoursesList from './cources.json';

export class CoursesService {

	public async getList(params?: { search: string }): Promise<TCourse[]> {
		const arr: TCourse[] = CoursesList;
		if (params && params.search) {
			const {search} = params;
			return arr.filter((course: TCourse) => {
				const regexp = new RegExp(search.toLowerCase());
				let has = null;
				has = has ? true : course.title.toLowerCase().match(regexp);
				has = has ? true : course.description.toLowerCase().match(regexp);
				return has;
			});
		}
		return arr;
	}

	public async getById(id: number): Promise<TCourse> {
		return CoursesList.find((item: TCourse) => item.id === id)
	}

	public async add(course: TCourse): Promise<TCourse> {
		console.log('CoursesService.add.course:', course);
		return course;
	}

	public async update(courseId: number, course: TCourse): Promise<TCourse> {
		console.log('CoursesService.update.course:', course, 'courseId:', courseId);
		return course;
	}

	public async delete(courseId: number): Promise<void> {
		console.log('CoursesService.delete.courseId:', courseId);
	}
}
