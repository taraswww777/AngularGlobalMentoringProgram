import { createReducer, on, createAction, props } from '@ngrx/store';
import { TAuthor, TCourse } from '../../types';

export const setCoursesList = createAction('courses.setCoursesList', props<{ payload: TCourse[] }>());
export const setCourseDetail = createAction('courses.setCourseDetail', props<{ payload: TCourse }>());

export const setAuthorsList = createAction('courses.setAuthorsList', props<{ payload: TAuthor[] }>());


export const myCoursesReducers = createReducer({},
	on(setCoursesList, (state, { payload: courses }) => {
		return { ...state, courses: [...courses] };
	}),

	on(setCourseDetail, (state, { payload: course }) => {
		return { ...state, course: { ...course } };
	}),

	on(setAuthorsList, (state, { payload: authors }) => {
		return { ...state, authors: [...authors] };
	}),
);


export function myCoursesListReducer(state, action) {
	return myCoursesReducers(state, action);
}
