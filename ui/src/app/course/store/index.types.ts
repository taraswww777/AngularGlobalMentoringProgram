import { TCourse } from '../types';

export type TStoreCourses = {
	courses: TCourse[],
	course: TCourse,
}

export type TStoreCoursesModule = {
	coursesStore: TStoreCourses
}
