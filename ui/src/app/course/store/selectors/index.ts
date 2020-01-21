import { createSelector } from '@ngrx/store';
import { TCourse } from '../../types';
import { TStoreCoursesModule, TStoreCourses } from '../index.types';


export const getCoursesList = createSelector(
	(state: TStoreCoursesModule) => state.coursesStore,
	(coursesStore: TStoreCourses): TCourse[] => coursesStore.courses
);


export const getCourseDetail = createSelector(
	(state: TStoreCoursesModule) => state.coursesStore,
	(coursesStore: TStoreCourses): TCourse => coursesStore.course
);
