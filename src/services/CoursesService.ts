import {ICourse} from 'src/interfaces/course';
// @ts-ignore
import CoursesList from './cources.json';

export class CoursesService {

	public async getList(): Promise<ICourse[]> {
		return CoursesList;
	}

	public async getById(id: number): Promise<ICourse> {
		return CoursesList.find((item: ICourse) => item.id === id)
	}
}
