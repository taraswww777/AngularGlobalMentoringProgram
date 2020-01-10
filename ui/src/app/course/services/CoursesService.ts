import {TCourse} from "../models/course";
import CoursesList from './cources.json';

export class CoursesService {
	private _listCourses: TCourse[] = CoursesList;

	public async getList(params?: { search: string }): Promise<TCourse[]> {
		const arr: TCourse[] = this._listCourses;
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

	public async getById(courseId: number): Promise<TCourse> {
		return this._listCourses.find((item: TCourse) => item.id === courseId)
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
		const listCourses = [];
		this._listCourses.forEach((item: TCourse) => {
			if (item.id !== courseId) {
				listCourses.push(item);
			}
		});
		this._listCourses = listCourses;
	}
}
