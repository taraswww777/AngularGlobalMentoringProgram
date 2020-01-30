import { TAuthor, TCourse } from '../types';
import { COURSES_MODULE_NAME } from '../config';

export type TStoreCourses = {
	courses: TCourse[],
	course: TCourse,
	authors: TAuthor[],
	author: TAuthor,
}

export type TStoreCoursesModule = {
	[COURSES_MODULE_NAME]: TStoreCourses
}
