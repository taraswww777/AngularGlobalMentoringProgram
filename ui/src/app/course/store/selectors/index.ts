import { createSelector } from '@ngrx/store';
import { TAuthor, TCourse } from '../../types';
import { TStoreCoursesModule, TStoreCourses } from '../index.types';
import { COURSES_MODULE_NAME } from '../../config';


export const getCoursesList = createSelector(
	(state: TStoreCoursesModule) => (state[COURSES_MODULE_NAME]),
	(coursesStore: TStoreCourses): TCourse[] => coursesStore.courses
);


export const getCourseDetail = createSelector(
	(state: TStoreCoursesModule) => state[COURSES_MODULE_NAME],
	(coursesStore: TStoreCourses): TCourse => coursesStore.course
);


export const getAuthorsList = createSelector(
	(state: TStoreCoursesModule) => (state[COURSES_MODULE_NAME]),
	(coursesStore: TStoreCourses): TAuthor[] => {
		console.log('getAuthorsList coursesStore:', coursesStore);
		return coursesStore.authors;
	}
);
