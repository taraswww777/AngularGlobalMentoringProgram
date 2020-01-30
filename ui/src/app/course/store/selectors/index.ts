import { createSelector } from '@ngrx/store';
import { TCourse } from '../../types';
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
