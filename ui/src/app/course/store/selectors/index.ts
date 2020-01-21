import { createSelector } from '@ngrx/store';
import { TStoreCoursesModule, TStoreCourses } from '../index.types';


export const getCoursesList = createSelector(
	(state: TStoreCoursesModule) => state.coursesStore,
	(coursesStore: TStoreCourses) => coursesStore.courses
);
