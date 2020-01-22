import { createReducer, on, createAction, props } from '@ngrx/store';
import { TCourse } from '../../types';

export const setCoursesList = createAction('courses.setCoursesList', props<{ payload: TCourse[] }>());
export const setCourseDetail = createAction('courses.setCourseDetail', props<{ payload: TCourse }>());

const _reducer = createReducer({},
	on(setCoursesList, (state, { payload: courses }) => {
		return { ...state, courses: [...courses] };
	}),

	on(setCourseDetail, (state, { payload: course }) => {
		return { ...state, course: { ...course } };
	})
);

export const myCoursesReducers = _reducer;

export function myCoursesListReducer(state, action) {
	return _reducer(state, action);
}
