import { TCourse } from '../types';
import { COURSES_MODULE_NAME } from '../config';

export type TStoreCourses = {
	courses: TCourse[],
	course: TCourse,
}

export type TStoreCoursesModule = {
	[COURSES_MODULE_NAME]: TStoreCourses
}
