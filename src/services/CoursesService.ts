import {ICourse} from 'src/interfaces/course';
// @ts-ignore
import CoursesList from './cources.json';

export class CoursesService {

	public async getList(params?: { search: string }): Promise<ICourse[]> {
		const arr: [] = CoursesList;
		if (params && params.search) {
			const {search} = params;
			return arr.filter((course: ICourse) => {
				const regexp = new RegExp(search.toLowerCase());
				let has = null;
				has = has ? true : course.title.toLowerCase().match(regexp);
				has = has ? true : course.description.toLowerCase().match(regexp);
				return has;
			});
		}
		return arr;
	}

	public async getById(id: number): Promise<ICourse> {
		return CoursesList.find((item: ICourse) => item.id === id)
	}
}
